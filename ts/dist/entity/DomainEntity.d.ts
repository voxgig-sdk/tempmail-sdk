import { TempmailEntityBase } from '../TempmailEntityBase';
import type { TempmailSDK } from '../TempmailSDK';
import type { Control } from '../types';
import type { Domain, DomainListMatch } from '../TempmailTypes';
declare class DomainEntity extends TempmailEntityBase<Domain> {
    constructor(client: TempmailSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
}
export { DomainEntity };
