<?php
declare(strict_types=1);

// Typed models for the Tempmail SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Domain entity data model. */
class Domain
{
    public ?array $domain = null;
}

/** Match filter for Domain#list (any subset of Domain fields). */
class DomainListMatch
{
    public ?array $domain = null;
}

/** Email entity data model. */
class Email
{
    public ?array $attachment = null;
    public ?string $body = null;
    public ?string $date = null;
    public ?string $from = null;
    public ?string $html = null;
    public ?string $id = null;
    public ?string $subject = null;
    public ?string $to = null;
}

/** Request payload for Email#load. */
class EmailLoadMatch
{
    public string $message_id;
    public string $token;
}

/** Inbox entity data model. */
class Inbox
{
    public ?string $address = null;
    public ?string $token = null;
}

/** Match filter for Inbox#load (any subset of Inbox fields). */
class InboxLoadMatch
{
    public ?string $address = null;
    public ?string $token = null;
}

/** Request payload for Inbox#create. */
class InboxCreateData
{
    public string $domain;
    public string $username;
}

/** Message entity data model. */
class Message
{
    public ?array $email = null;
}

/** Request payload for Message#load. */
class MessageLoadMatch
{
    public string $token;
}

/** Request payload for Message#remove. */
class MessageRemoveMatch
{
    public string $id;
    public string $token;
}

/** Webhook entity data model. */
class Webhook
{
    public ?bool $success = null;
    public string $token;
    public string $url;
    public ?string $webhook_id = null;
}

/** Match filter for Webhook#create (any subset of Webhook fields). */
class WebhookCreateData
{
    public ?bool $success = null;
    public ?string $token = null;
    public ?string $url = null;
    public ?string $webhook_id = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
}

