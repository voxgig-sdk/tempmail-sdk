import { TempmailEntityBase } from '../TempmailEntityBase';
import type { TempmailSDK } from '../TempmailSDK';
import type { Control } from '../types';
import type { Message, MessageLoadMatch, MessageRemoveMatch } from '../TempmailTypes';
declare class MessageEntity extends TempmailEntityBase<Message> {
    constructor(client: TempmailSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    load(this: any, reqmatch?: MessageLoadMatch, ctrl?: Control): Promise<MessageEntity>;
    remove(this: any, reqmatch?: MessageRemoveMatch, ctrl?: Control): Promise<MessageEntity>;
}
export { MessageEntity };
