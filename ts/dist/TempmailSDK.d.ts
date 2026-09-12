import { DomainEntity } from './entity/DomainEntity';
import { EmailEntity } from './entity/EmailEntity';
import { InboxEntity } from './entity/InboxEntity';
import { MessageEntity } from './entity/MessageEntity';
import { WebhookEntity } from './entity/WebhookEntity';
export type * from './TempmailTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TempmailEntityBase } from './TempmailEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TempmailSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Domain(entopts?: Record<string, any>): DomainEntity;
    Email(entopts?: Record<string, any>): EmailEntity;
    Inbox(entopts?: Record<string, any>): InboxEntity;
    Message(entopts?: Record<string, any>): MessageEntity;
    Webhook(entopts?: Record<string, any>): WebhookEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TempmailSDK;
    tester(testopts?: any, sdkopts?: any): TempmailSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TempmailSDK;
export { stdutil, config, BaseFeature, TempmailEntityBase, TempmailSDK, SDK, };
