import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';
import { DashboardV1 } from '../data/version1/DashboardV1';
import { IDashboardsController } from './IDashboardsController';
export declare class DashboardsController implements IConfigurable, IReferenceable, ICommandable, IDashboardsController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _persistence;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    private makeDashboardId;
    getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>>;
    getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1>;
    setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1>;
    deleteDashboards(correlationId: string, filter: FilterParams): Promise<void>;
}
