-- Typed models for the Tempmail SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Domain
---@field domain? table

---@class DomainListMatch

---@class Email
---@field attachment? table
---@field body? string
---@field date? string
---@field from? string
---@field html? string
---@field id? string
---@field subject? string
---@field to? string

---@class EmailLoadMatch
---@field message_id string
---@field token string

---@class Inbox
---@field address? string
---@field token? string

---@class InboxLoadMatch

---@class InboxCreateData
---@field domain string
---@field username string

---@class Message
---@field email? table

---@class MessageLoadMatch
---@field token string

---@class MessageRemoveMatch
---@field id string
---@field token string

---@class Webhook
---@field success? boolean
---@field token string
---@field url string
---@field webhook_id? string

---@class WebhookCreateData

---@class WebhookRemoveMatch
---@field id string

local M = {}

return M
