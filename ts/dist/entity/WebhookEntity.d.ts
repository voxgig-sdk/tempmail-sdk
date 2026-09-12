import { TempmailEntityBase } from '../TempmailEntityBase';
import type { TempmailSDK } from '../TempmailSDK';
import type { Control } from '../types';
import type { Webhook, WebhookCreateData, WebhookRemoveMatch } from '../TempmailTypes';
declare class WebhookEntity extends TempmailEntityBase<Webhook> {
    constructor(client: TempmailSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
