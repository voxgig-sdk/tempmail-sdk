# Tempmail SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Tempmail",
            "slug": "tempmail",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "domains",
            "type": "`$ARRAY`",
          },
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
                "segments": [
                  {
                    "lit": "domains",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.domains`",
                },
                "parts": [
                  "domains",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "email": {
        "fields": [
          {
            "name": "attachments",
            "short": "List of email attachments",
            "type": "`$ARRAY`",
          },
          {
            "name": "body",
            "short": "Email body content (plain text)",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "date",
            "short": "Timestamp when the email was received",
            "type": "`$STRING`",
          },
          {
            "name": "from",
            "short": "Sender's email address",
            "type": "`$STRING`",
          },
          {
            "name": "html",
            "short": "Email body content (HTML format)",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the email message",
            "type": "`$STRING`",
          },
          {
            "name": "subject",
            "short": "Email subject line",
            "type": "`$STRING`",
          },
          {
            "name": "to",
            "short": "Recipient's email address",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/inbox/{token}/message/{messageId}",
                "rename": {
                  "param": {
                    "messageId": "message_id",
                  },
                },
                "segments": [
                  {
                    "lit": "inbox",
                  },
                  {
                    "var": "token",
                  },
                  {
                    "lit": "message",
                  },
                  {
                    "var": "message_id",
                  },
                ],
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
                "parts": [
                  "inbox",
                  "{token}",
                  "message",
                  "{message_id}",
                ],
              },
            ],
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
            "name": "address",
            "short": "The generated temporary email address",
            "type": "`$STRING`",
          },
          {
            "name": "token",
            "short": "Authentication token for accessing this inbox",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "username",
                      "orig": "username",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/custom/{username}@{domain}",
                "segments": [
                  {
                    "lit": "custom",
                  },
                  {
                    "lit": "{username}@{domain}",
                  },
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
                "parts": [
                  "custom",
                  "{username}@{domain}",
                ],
              },
            ],
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
                "segments": [
                  {
                    "lit": "generate",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "generate",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "message": {
        "fields": [
          {
            "name": "emails",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/inbox/{token}",
                "segments": [
                  {
                    "lit": "inbox",
                  },
                  {
                    "var": "token",
                  },
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
                "parts": [
                  "inbox",
                  "{token}",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/inbox/{token}/message/{messageId}",
                "rename": {
                  "param": {
                    "messageId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "inbox",
                  },
                  {
                    "var": "token",
                  },
                  {
                    "lit": "message",
                  },
                  {
                    "var": "id",
                  },
                ],
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
                "parts": [
                  "inbox",
                  "{token}",
                  "message",
                  "{id}",
                ],
              },
            ],
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
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "token",
            "req": True,
            "short": "The inbox token to register webhook for",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "The webhook URL to receive notifications",
            "type": "`$STRING`",
          },
          {
            "name": "webhookId",
            "short": "Unique identifier for the registered webhook",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                "segments": [
                  {
                    "lit": "webhook",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhook",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/webhook/{webhookId}",
                "rename": {
                  "param": {
                    "webhookId": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "webhook",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "webhook",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
