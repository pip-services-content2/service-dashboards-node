import { DataPage, FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';
import { DashboardV1 } from '../data/version1/DashboardV1';
import { IDashboardsPersistence } from './IDashboardsPersistence';
export declare class DashboardsMongoDbPersistence extends IdentifiableMongoDbPersistence<DashboardV1, string> implements IDashboardsPersistence {
    constructor();
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>>;
    deleteByFilter(correlationId: string, filter: FilterParams): Promise<void>;
}
