// Typed models for the Tempmail SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Domain {
  domain?: any[]
}

export type DomainListMatch = Partial<Domain>

export interface Email {
  attachment?: any[]
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

export type InboxLoadMatch = Partial<Inbox>

export interface InboxCreateData {
  domain: string
  username: string
}

export interface Message {
  email?: any[]
}

export interface MessageLoadMatch {
  token: string
}

export interface MessageRemoveMatch {
  id: string
  token: string
}

export interface Webhook {
  success?: boolean
  token: string
  url: string
  webhook_id?: string
}

export type WebhookCreateData = Partial<Webhook>

export interface WebhookRemoveMatch {
  id: string
}

