# Tempmail Golang SDK Reference

Complete API reference for the Tempmail Golang SDK.


## TempmailSDK

### Constructor

```go
func NewTempmailSDK(options map[string]any) *TempmailSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TempmailSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TempmailSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Domain(data map[string]any) TempmailEntity`

Create a new `Domain` entity instance. Pass `nil` for no initial data.

#### `Email(data map[string]any) TempmailEntity`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Inbox(data map[string]any) TempmailEntity`

Create a new `Inbox` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) TempmailEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) TempmailEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## DomainEntity

```go
domain := client.Domain(nil)
fmt.Println(domain.GetName()) // "domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Domain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailEntity

```go
email := client.Email(nil)
fmt.Println(email.GetName()) // "email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `[]any` | No | List of email attachments |
| `body` | `string` | No | Email body content (plain text) |
| `date` | `string` | No | Timestamp when the email was received |
| `from` | `string` | No | Sender's email address |
| `html` | `string` | No | Email body content (HTML format) |
| `id` | `string` | No | Unique identifier for the email message |
| `subject` | `string` | No | Email subject line |
| `to` | `string` | No | Recipient's email address |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Email(nil).Load(map[string]any{"message_id": "message_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InboxEntity

```go
inbox := client.Inbox(nil)
fmt.Println(inbox.GetName()) // "inbox"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | The generated temporary email address |
| `token` | `string` | No | Authentication token for accessing this inbox |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Inbox(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Inbox(nil).Create(map[string]any{
    "domain": "example_domain",
    "username": "example_username",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InboxEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `[]any` | No |  |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Message(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Message(nil).Remove(map[string]any{"id": "id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `success` | `bool` | No |  |
| `token` | `string` | Yes | The inbox token to register webhook for |
| `url` | `string` | Yes | The webhook URL to receive notifications |
| `webhookId` | `string` | No | Unique identifier for the registered webhook |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "token": "example_token",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewTempmailSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

