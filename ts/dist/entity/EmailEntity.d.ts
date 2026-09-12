import { TempmailEntityBase } from '../TempmailEntityBase';
import type { TempmailSDK } from '../TempmailSDK';
import type { Control } from '../types';
import type { Email, EmailLoadMatch } from '../TempmailTypes';
declare class EmailEntity extends TempmailEntityBase<Email> {
    constructor(client: TempmailSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    load(this: any, reqmatch?: EmailLoadMatch, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
