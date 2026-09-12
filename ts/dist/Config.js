"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Tempmail',
        slug: "tempmail",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.tempmail.lol",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            domain: {},
            email: {},
            inbox: {},
            message: {},
            webhook: {},
        }
    };
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
                            "segments": [
                                {
                                    "lit": "domains"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.domains`"
                            },
                            "parts": [
                                "domains"
                            ]
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
                    "format": "date-time",
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
            "id": {
                "field": "id",
                "name": "id"
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
                            "rename": {
                                "param": {
                                    "messageId": "message_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "inbox"
                                },
                                {
                                    "var": "token"
                                },
                                {
                                    "lit": "message"
                                },
                                {
                                    "var": "message_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "message_id",
                                    "token"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "inbox",
                                "{token}",
                                "message",
                                "{message_id}"
                            ]
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
                            "segments": [
                                {
                                    "lit": "custom"
                                },
                                {
                                    "lit": "{username}@{domain}"
                                }
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
                            },
                            "parts": [
                                "custom",
                                "{username}@{domain}"
                            ]
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
                            "segments": [
                                {
                                    "lit": "generate"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "generate"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
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
            "id": {
                "field": "id",
                "name": "id"
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
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/inbox/{token}",
                            "segments": [
                                {
                                    "lit": "inbox"
                                },
                                {
                                    "var": "token"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "token"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "inbox",
                                "{token}"
                            ]
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
                            "rename": {
                                "param": {
                                    "messageId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "inbox"
                                },
                                {
                                    "var": "token"
                                },
                                {
                                    "lit": "message"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "token"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "inbox",
                                "{token}",
                                "message",
                                "{id}"
                            ]
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
                    "format": "uri",
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
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "webhook"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "webhook"
                            ]
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
                            "rename": {
                                "param": {
                                    "webhookId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "webhook"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "webhook",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map