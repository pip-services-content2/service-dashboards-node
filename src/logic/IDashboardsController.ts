import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { DashboardV1 } from '../data/version1/DashboardV1';

export interface IDashboardsController {
    getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>>;

    getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1>;

    setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1>;

    deleteDashboards(correlationId: string, filter: FilterParams): Promise<void>;
}
