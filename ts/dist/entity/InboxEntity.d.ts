import { TempmailEntityBase } from '../TempmailEntityBase';
import type { TempmailSDK } from '../TempmailSDK';
import type { Control } from '../types';
import type { Inbox, InboxLoadMatch, InboxCreateData } from '../TempmailTypes';
declare class InboxEntity extends TempmailEntityBase<Inbox> {
    constructor(client: TempmailSDK, entopts: any);
    make(this: InboxEntity): InboxEntity;
    load(this: any, reqmatch?: InboxLoadMatch, ctrl?: Control): Promise<InboxEntity>;
    create(this: any, reqdata?: InboxCreateData, ctrl?: Control): Promise<InboxEntity>;
}
export { InboxEntity };
