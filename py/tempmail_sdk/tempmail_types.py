# Typed models for the Tempmail SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Domain(TypedDict, total=False):
    domains: list


class DomainListMatch(TypedDict, total=False):
    domains: list


class Email(TypedDict, total=False):
    attachments: list
    body: str
    date: str
    html: str
    id: str
    subject: str
    to: str


class EmailLoadMatch(TypedDict):
    message_id: str
    token: str


class Inbox(TypedDict, total=False):
    address: str
    token: str


class InboxLoadMatch(TypedDict, total=False):
    address: str
    token: str


class InboxCreateDataRequired(TypedDict):
    domain: str
    username: str


class InboxCreateData(InboxCreateDataRequired, total=False):
    address: str
    token: str


class Message(TypedDict, total=False):
    emails: list
    id: str


class MessageLoadMatch(TypedDict):
    token: str


class MessageRemoveMatch(TypedDict):
    id: str
    token: str


class WebhookRequired(TypedDict):
    token: str
    url: str


class Webhook(WebhookRequired, total=False):
    id: str
    success: bool
    webhookId: str


class WebhookCreateDataRequired(TypedDict):
    token: str
    url: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    id: str
    success: bool
    webhookId: str


class WebhookRemoveMatch(TypedDict):
    id: str
