# Tempmail SDK configuration


def make_config():
    return {
        "main": {
            "name": "Tempmail",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.tempmail.lol",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "domain": {},
                "email": {},
                "inbox": {},
                "message": {},
                "webhook": {},
            },
        },
        "entity": {
      "domain": {
        "fields": [
          {
            "active": True,
            "name": "domain",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "domain",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/domains",
                "parts": [
                  "domains",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "email": {
        "fields": [
          {
            "active": True,
            "name": "attachment",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "body",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "date",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "from",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "html",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "subject",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "to",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "email",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "message_id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/inbox/{token}/message/{messageId}",
                "parts": [
                  "inbox",
                  "{token}",
                  "message",
                  "{message_id}",
                ],
                "rename": {
                  "param": {
                    "messageId": "message_id",
                  },
                },
                "select": {
                  "exist": [
                    "message_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "inbox",
              "message",
            ],
          ],
        },
      },
      "inbox": {
        "fields": [
          {
            "active": True,
            "name": "address",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "inbox",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "domain",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "username",
                      "orig": "username",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/custom/{username}@{domain}",
                "parts": [
                  "custom",
                  "{username}@{domain}",
                ],
                "select": {
                  "exist": [
                    "domain",
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/generate",
                "parts": [
                  "generate",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "custom",
            ],
          ],
        },
      },
      "message": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "message",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/inbox/{token}",
                "parts": [
                  "inbox",
                  "{token}",
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/inbox/{token}/message/{messageId}",
                "parts": [
                  "inbox",
                  "{token}",
                  "message",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "messageId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "inbox",
            ],
          ],
        },
      },
      "webhook": {
        "fields": [
          {
            "active": True,
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "token",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "webhook_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "webhook",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/webhook",
                "parts": [
                  "webhook",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "webhook_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/webhook/{webhookId}",
                "parts": [
                  "webhook",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "webhookId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
