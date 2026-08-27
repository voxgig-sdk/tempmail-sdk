// Typed models for the Tempmail SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Domain {
  domains?: any[]
}

export interface DomainListMatch {
  domains?: any[]
}

export interface Email {
  attachments?: any[]
  body?: string
  date?: string
  from?: string
  html?: string
  id?: string
  subject?: string
  to?: string
}

export interface EmailLoadMatch {
  message_id: string
  token: string
}

export interface Inbox {
  address?: string
  token?: string
}

export interface InboxLoadMatch {
  address?: string
  token?: string
}

export interface InboxCreateData {
  domain: string
  username: string
  address?: string
  token?: string
}

export interface Message {
  emails?: any[]
  id?: string
}

export interface MessageLoadMatch {
  token: string
}

export interface MessageRemoveMatch {
  id: string
  token: string
}

export interface Webhook {
  id?: string
  success?: boolean
  token: string
  url: string
  webhookId?: string
}

export interface WebhookCreateData {
  id?: string
  success?: boolean
  token: string
  url: string
  webhookId?: string
}

export interface WebhookRemoveMatch {
  id: string
}

