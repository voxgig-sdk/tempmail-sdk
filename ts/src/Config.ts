
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


  main = {
    name: 'Tempmail',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "body",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "from",
          "type": "`$STRING`"
        },
        {
          "name": "html",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "subject",
          "type": "`$STRING`"
        },
        {
          "name": "to",
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
          "type": "`$STRING`"
        },
        {
          "name": "token",
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
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "token",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "webhookId",
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

