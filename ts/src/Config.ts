
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Tempmail',
        slug: "tempmail",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.tempmail.lol",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      domain: {
      },

      email: {
      },

      inbox: {
      },

      message: {
      },

      webhook: {
      },

    }
  }


  entity = {
    "domain": {
      "fields": [
        {
          "name": "domains",
          "type": "`$ARRAY`"
        }
      ],
      "name": "domain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/domains",
              "parts": [
                "domains"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.domains`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "email": {
      "fields": [
        {
          "name": "attachments",
          "short": "List of email attachments",
          "type": "`$ARRAY`"
        },
        {
          "name": "body",
          "short": "Email body content (plain text)",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "short": "Timestamp when the email was received",
          "type": "`$STRING`"
        },
        {
          "name": "from",
          "short": "Sender's email address",
          "type": "`$STRING`"
        },
        {
          "name": "html",
          "short": "Email body content (HTML format)",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the email message",
          "type": "`$STRING`"
        },
        {
          "name": "subject",
          "short": "Email subject line",
          "type": "`$STRING`"
        },
        {
          "name": "to",
          "short": "Recipient's email address",
          "type": "`$STRING`"
        }
      ],
      "name": "email",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "message_id",
                    "orig": "message_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "token",
                    "orig": "token",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/inbox/{token}/message/{messageId}",
              "parts": [
                "inbox",
                "{token}",
                "message",
                "{message_id}"
              ],
              "rename": {
                "param": {
                  "messageId": "message_id"
                }
              },
              "select": {
                "exist": [
                  "message_id",
                  "token"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "inbox",
            "message"
          ]
        ]
      }
    },
    "inbox": {
      "fields": [
        {
          "name": "address",
          "short": "The generated temporary email address",
          "type": "`$STRING`"
        },
        {
          "name": "token",
          "short": "Authentication token for accessing this inbox",
          "type": "`$STRING`"
        }
      ],
      "name": "inbox",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "domain",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/custom/{username}@{domain}",
              "parts": [
                "custom",
                "{username}@{domain}"
              ],
              "select": {
                "exist": [
                  "domain",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/generate",
              "parts": [
                "generate"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "custom"
          ]
        ]
      }
    },
    "message": {
      "fields": [
        {
          "name": "emails",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "name": "message",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "token",
                    "orig": "token",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/inbox/{token}",
              "parts": [
                "inbox",
                "{token}"
              ],
              "select": {
                "exist": [
                  "token"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "message_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "token",
                    "orig": "token",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/inbox/{token}/message/{messageId}",
              "parts": [
                "inbox",
                "{token}",
                "message",
                "{id}"
              ],
              "rename": {
                "param": {
                  "messageId": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "token"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "inbox"
          ]
        ]
      }
    },
    "webhook": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "token",
          "req": true,
          "short": "The inbox token to register webhook for",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "short": "The webhook URL to receive notifications",
          "type": "`$STRING`"
        },
        {
          "name": "webhookId",
          "short": "Unique identifier for the registered webhook",
          "type": "`$STRING`"
        }
      ],
      "name": "webhook",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/webhook",
              "parts": [
                "webhook"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "webhook_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/webhook/{webhookId}",
              "parts": [
                "webhook",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhookId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

