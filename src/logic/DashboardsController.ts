import { ConfigParams } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { DependencyResolver } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ICommandable } from 'pip-services3-commons-nodex';
import { CommandSet } from 'pip-services3-commons-nodex';

import { DashboardV1 } from '../data/version1/DashboardV1';
import { IDashboardsPersistence } from '../persistence/IDashboardsPersistence';
import { IDashboardsController } from './IDashboardsController';
import { DashboardsCommandSet } from './DashboardsCommandSet';

export class DashboardsController implements IConfigurable, IReferenceable, ICommandable, IDashboardsController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'service-dashboards:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(DashboardsController._defaultConfig);
    private _persistence: IDashboardsPersistence;
    private _commandSet: DashboardsCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IDashboardsPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new DashboardsCommandSet(this);
        return this._commandSet;
    }

    private makeDashboardId(userId: string, app: string, kind: string) {
        let id = userId + "_" + app;
        if (kind) id += "_" + kind;
        return id;
    }

    public async getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>> {
        let page = await this._persistence.getPageByFilter(correlationId, filter, paging);

        if (page)
            for(let d of page.data) 
                delete d.id;

        return page;
    }

    public async getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1> {
        let id = this.makeDashboardId(userId, app, kind);
        let dashboard = await this._persistence.getOneById(correlationId, id);

        if (dashboard == null) {
            dashboard = <DashboardV1>{
                user_id: userId,
                app: app,
                kind: kind
            };
        }

        if (dashboard)
            delete dashboard.id;

        return dashboard;
    }

    public async setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1> {
        dashboard.id = this.makeDashboardId(dashboard.user_id, dashboard.app, dashboard.kind);

        dashboard = await this._persistence.set(correlationId, dashboard);

        if (dashboard)
            delete dashboard.id;

        return dashboard;
    }

    public async deleteDashboards(correlationId: string, filter: FilterParams): Promise<void> {
        return await this._persistence.deleteByFilter(correlationId, filter);
    }

}
