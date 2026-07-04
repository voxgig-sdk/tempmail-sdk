# Typed models for the Tempmail SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Domain:
    domain: Optional[list] = None


@dataclass
class DomainListMatch:
    domain: Optional[list] = None


@dataclass
class Email:
    attachment: Optional[list] = None
    body: Optional[str] = None
    date: Optional[str] = None
    html: Optional[str] = None
    id: Optional[str] = None
    subject: Optional[str] = None
    to: Optional[str] = None


@dataclass
class EmailLoadMatch:
    message_id: str
    token: str


@dataclass
class Inbox:
    address: Optional[str] = None
    token: Optional[str] = None


@dataclass
class InboxLoadMatch:
    address: Optional[str] = None
    token: Optional[str] = None


@dataclass
class InboxCreateData:
    domain: str
    username: str


@dataclass
class Message:
    email: Optional[list] = None


@dataclass
class MessageLoadMatch:
    token: str


@dataclass
class MessageRemoveMatch:
    id: str
    token: str


@dataclass
class Webhook:
    token: str
    url: str
    success: Optional[bool] = None
    webhook_id: Optional[str] = None


@dataclass
class WebhookCreateData:
    success: Optional[bool] = None
    token: Optional[str] = None
    url: Optional[str] = None
    webhook_id: Optional[str] = None


@dataclass
class WebhookRemoveMatch:
    id: str

