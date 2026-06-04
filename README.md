# Tempmail SDK

Spin up disposable inboxes and receive messages or webhooks via the tempmail.lol API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About TempMail API

[TempMail](https://tempmail.lol) is a disposable email service that lets you generate throwaway inboxes on demand and read the messages they receive. The hosted API at `https://api.tempmail.lol` powers the same flows used by the web app and the official JavaScript and Python client libraries.

Typical uses include signup-flow testing, anti-spam screening, automated QA of transactional email, and webhook-driven pipelines that forward inbound mail to other systems.

Operational notes:

- Account, plan, and key management is handled through `https://tempmail.lol/account`.
- Official client libraries are published for JavaScript and Python; community support is available on the project Discord.
- Consult the live documentation at `https://tempmail.lol/api` for authoritative endpoint shapes, auth requirements, and any plan-specific limits.

## Try it

**TypeScript**
```bash
npm install tempmail
```

**Python**
```bash
pip install tempmail-sdk
```

**PHP**
```bash
composer require voxgig/tempmail-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/tempmail-sdk/go
```

**Ruby**
```bash
gem install tempmail-sdk
```

**Lua**
```bash
luarocks install tempmail-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TempmailSDK } from 'tempmail'

const client = new TempmailSDK({})

// List all domains
const domains = await client.Domain().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o tempmail-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "tempmail": {
      "command": "/abs/path/to/tempmail-mcp"
    }
  }
}
```

## Entities

The API exposes 5 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Domain** | A mail domain that can be used to host disposable inbox addresses. | `/domains` |
| **Email** | An individual email address allocated for receiving disposable mail. | `/inbox/{token}/message/{messageId}` |
| **Inbox** | A disposable inbox created on demand to collect incoming messages addressed to its email. | `/custom/{username}@{domain}` |
| **Message** | A single received email captured by an inbox, including sender, subject, body, and any attachments. | `/inbox/{token}` |
| **Webhook** | A subscription that forwards inbound mail events to a caller-supplied URL for real-time processing. | `/webhook` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from tempmail_sdk import TempmailSDK

client = TempmailSDK({})

# List all domains
domains, err = client.Domain(None).list(None, None)
```

### PHP

```php
<?php
require_once 'tempmail_sdk.php';

$client = new TempmailSDK([]);

// List all domains
[$domains, $err] = $client->Domain(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/tempmail-sdk/go"

client := sdk.NewTempmailSDK(map[string]any{})

// List all domains
domains, err := client.Domain(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Tempmail_sdk"

client = TempmailSDK.new({})

# List all domains
domains, err = client.Domain(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("tempmail_sdk")

local client = sdk.new({})

-- List all domains
local domains, err = client:Domain(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TempmailSDK.test()
const result = await client.Domain().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TempmailSDK.test(None, None)
result, err = client.Domain(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TempmailSDK::test(null, null);
[$result, $err] = $client->Domain(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Domain(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TempmailSDK.test(nil, nil)
result, err = client.Domain(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Domain(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the TempMail API

- Upstream: [https://tempmail.lol](https://tempmail.lol)
- API docs: [https://tempmail.lol/api](https://tempmail.lol/api)

---

Generated from the TempMail API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
