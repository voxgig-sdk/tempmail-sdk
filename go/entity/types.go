// Typed models for the Tempmail SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Domain is the typed data model for the domain entity.
type Domain struct {
	Domain *[]any `json:"domain,omitempty"`
}

// DomainListMatch mirrors the domain fields as an all-optional match
// filter (Go analog of Partial<Domain>).
type DomainListMatch struct {
	Domain *[]any `json:"domain,omitempty"`
}

// Email is the typed data model for the email entity.
type Email struct {
	Attachment *[]any `json:"attachment,omitempty"`
	Body *string `json:"body,omitempty"`
	Date *string `json:"date,omitempty"`
	From *string `json:"from,omitempty"`
	Html *string `json:"html,omitempty"`
	Id *string `json:"id,omitempty"`
	Subject *string `json:"subject,omitempty"`
	To *string `json:"to,omitempty"`
}

// EmailLoadMatch is the typed request payload for Email.LoadTyped.
type EmailLoadMatch struct {
	MessageId string `json:"message_id"`
	Token string `json:"token"`
}

// Inbox is the typed data model for the inbox entity.
type Inbox struct {
	Address *string `json:"address,omitempty"`
	Token *string `json:"token,omitempty"`
}

// InboxLoadMatch mirrors the inbox fields as an all-optional match
// filter (Go analog of Partial<Inbox>).
type InboxLoadMatch struct {
	Address *string `json:"address,omitempty"`
	Token *string `json:"token,omitempty"`
}

// InboxCreateData is the typed request payload for Inbox.CreateTyped.
type InboxCreateData struct {
	Domain string `json:"domain"`
	Username string `json:"username"`
}

// Message is the typed data model for the message entity.
type Message struct {
	Email *[]any `json:"email,omitempty"`
}

// MessageLoadMatch is the typed request payload for Message.LoadTyped.
type MessageLoadMatch struct {
	Token string `json:"token"`
}

// MessageRemoveMatch is the typed request payload for Message.RemoveTyped.
type MessageRemoveMatch struct {
	Id string `json:"id"`
	Token string `json:"token"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	Success *bool `json:"success,omitempty"`
	Token string `json:"token"`
	Url string `json:"url"`
	WebhookId *string `json:"webhook_id,omitempty"`
}

// WebhookCreateData mirrors the webhook fields as an all-optional match
// filter (Go analog of Partial<Webhook>).
type WebhookCreateData struct {
	Success *bool `json:"success,omitempty"`
	Token *string `json:"token,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookId *string `json:"webhook_id,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
