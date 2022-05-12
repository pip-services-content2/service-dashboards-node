import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IGetter } from 'pip-services3-data-nodex';
import { ISetter } from 'pip-services3-data-nodex';

import { DashboardV1 } from '../data/version1/DashboardV1';

export interface IDashboardsPersistence
    extends IGetter<DashboardV1, string>, ISetter<DashboardV1>  {
    
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>>;

    getOneById(correlationId: string, id: string): Promise<DashboardV1>;

    set(correlationId: string, item: DashboardV1): Promise<DashboardV1>;

    deleteById(correlationId: string, id: string): Promise<DashboardV1>;

    deleteByFilter(correlationId: string, filter: FilterParams): Promise<void>;
}

