# Tempmail SDK configuration

module TempmailConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Tempmail",
        "slug" => "tempmail",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.tempmail.lol",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "domain" => {},
          "email" => {},
          "inbox" => {},
          "message" => {},
          "webhook" => {},
        },
      },
      "entity" => {
        "domain" => {
          "fields" => [
            {
              "name" => "domains",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "domain",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/domains",
                  "parts" => [
                    "domains",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.domains`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "email" => {
          "fields" => [
            {
              "name" => "attachments",
              "short" => "List of email attachments",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "body",
              "short" => "Email body content (plain text)",
              "type" => "`$STRING`",
            },
            {
              "name" => "date",
              "short" => "Timestamp when the email was received",
              "type" => "`$STRING`",
            },
            {
              "name" => "from",
              "short" => "Sender's email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "html",
              "short" => "Email body content (HTML format)",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the email message",
              "type" => "`$STRING`",
            },
            {
              "name" => "subject",
              "short" => "Email subject line",
              "type" => "`$STRING`",
            },
            {
              "name" => "to",
              "short" => "Recipient's email address",
              "type" => "`$STRING`",
            },
          ],
          "name" => "email",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "message_id",
                        "orig" => "message_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "token",
                        "orig" => "token",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/inbox/{token}/message/{messageId}",
                  "parts" => [
                    "inbox",
                    "{token}",
                    "message",
                    "{message_id}",
                  ],
                  "rename" => {
                    "param" => {
                      "messageId" => "message_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "message_id",
                      "token",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "inbox",
                "message",
              ],
            ],
          },
        },
        "inbox" => {
          "fields" => [
            {
              "name" => "address",
              "short" => "The generated temporary email address",
              "type" => "`$STRING`",
            },
            {
              "name" => "token",
              "short" => "Authentication token for accessing this inbox",
              "type" => "`$STRING`",
            },
          ],
          "name" => "inbox",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "domain",
                        "orig" => "domain",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/custom/{username}@{domain}",
                  "parts" => [
                    "custom",
                    "{username}@{domain}",
                  ],
                  "select" => {
                    "exist" => [
                      "domain",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/generate",
                  "parts" => [
                    "generate",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "custom",
              ],
            ],
          },
        },
        "message" => {
          "fields" => [
            {
              "name" => "emails",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "message",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "token",
                        "orig" => "token",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/inbox/{token}",
                  "parts" => [
                    "inbox",
                    "{token}",
                  ],
                  "select" => {
                    "exist" => [
                      "token",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "message_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "token",
                        "orig" => "token",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/inbox/{token}/message/{messageId}",
                  "parts" => [
                    "inbox",
                    "{token}",
                    "message",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "messageId" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                      "token",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "inbox",
              ],
            ],
          },
        },
        "webhook" => {
          "fields" => [
            {
              "name" => "success",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "token",
              "req" => true,
              "short" => "The inbox token to register webhook for",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "req" => true,
              "short" => "The webhook URL to receive notifications",
              "type" => "`$STRING`",
            },
            {
              "name" => "webhookId",
              "short" => "Unique identifier for the registered webhook",
              "type" => "`$STRING`",
            },
          ],
          "name" => "webhook",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/webhook",
                  "parts" => [
                    "webhook",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "webhook_id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/webhook/{webhookId}",
                  "parts" => [
                    "webhook",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "webhookId" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TempmailFeatures.make_feature(name)
  end
end
