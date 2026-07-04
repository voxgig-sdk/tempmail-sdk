# frozen_string_literal: true

# Typed models for the Tempmail SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Domain entity data model.
#
# @!attribute [rw] domain
#   @return [Array, nil]
Domain = Struct.new(
  :domain,
  keyword_init: true
)

# Match filter for Domain#list (any subset of Domain fields).
#
# @!attribute [rw] domain
#   @return [Array, nil]
DomainListMatch = Struct.new(
  :domain,
  keyword_init: true
)

# Email entity data model.
#
# @!attribute [rw] attachment
#   @return [Array, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
Email = Struct.new(
  :attachment,
  :body,
  :date,
  :from,
  :html,
  :id,
  :subject,
  :to,
  keyword_init: true
)

# Request payload for Email#load.
#
# @!attribute [rw] message_id
#   @return [String]
#
# @!attribute [rw] token
#   @return [String]
EmailLoadMatch = Struct.new(
  :message_id,
  :token,
  keyword_init: true
)

# Inbox entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
Inbox = Struct.new(
  :address,
  :token,
  keyword_init: true
)

# Match filter for Inbox#load (any subset of Inbox fields).
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
InboxLoadMatch = Struct.new(
  :address,
  :token,
  keyword_init: true
)

# Request payload for Inbox#create.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] username
#   @return [String]
InboxCreateData = Struct.new(
  :domain,
  :username,
  keyword_init: true
)

# Message entity data model.
#
# @!attribute [rw] email
#   @return [Array, nil]
Message = Struct.new(
  :email,
  keyword_init: true
)

# Request payload for Message#load.
#
# @!attribute [rw] token
#   @return [String]
MessageLoadMatch = Struct.new(
  :token,
  keyword_init: true
)

# Request payload for Message#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] token
#   @return [String]
MessageRemoveMatch = Struct.new(
  :id,
  :token,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] webhook_id
#   @return [String, nil]
Webhook = Struct.new(
  :success,
  :token,
  :url,
  :webhook_id,
  keyword_init: true
)

# Match filter for Webhook#create (any subset of Webhook fields).
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook_id
#   @return [String, nil]
WebhookCreateData = Struct.new(
  :success,
  :token,
  :url,
  :webhook_id,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] id
#   @return [String]
WebhookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

