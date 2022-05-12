const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { IDashboardsPersistence } from '../../src/persistence/IDashboardsPersistence';
import { DashboardV1 } from '../../src/data/version1/DashboardV1';
import { TileGroupV1 } from '../../src/data/version1/TileGroupV1';

let DASHBOARD1 = <DashboardV1>{
    id: null,
    user_id: '1',
    app: 'Test App 1',
    groups: []
};
let DASHBOARD2 = <DashboardV1>{
    id: null,
    user_id: '1',
    app: 'Test App 2',
    groups: []
};
let DASHBOARD3 = <DashboardV1>{
    id: null,
    user_id: '2',
    app: 'Test App 1',
    groups: []
};

export class DashboardsPersistenceFixture {
    private _persistence: IDashboardsPersistence;
    
    constructor(persistence: IDashboardsPersistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    public async createDashboards() {
        // Create one dashboard
        let dashboard = await this._persistence.set(null, DASHBOARD1);

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD1.user_id);
        assert.equal(dashboard.app, DASHBOARD1.app);

        // Create another dashboard
        dashboard = await this._persistence.set(null, DASHBOARD2);

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD2.user_id);
        assert.equal(dashboard.app, DASHBOARD2.app);

        // Create yet another dashboard
        dashboard = await this._persistence.set(null, DASHBOARD3);

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD3.user_id);
        assert.equal(dashboard.app, DASHBOARD3.app);
    }
                
    public async testCrudOperations() {
        let dashboard1: DashboardV1;

        // Create items
        await this.createDashboards();

        // Get all dashboards
        let page = await this._persistence.getPageByFilter(null, new FilterParams(), new PagingParams());

        assert.isObject(page);
        assert.lengthOf(page.data, 3);

        dashboard1 = page.data[0];

        // Set the dashboard
        dashboard1.groups = [<TileGroupV1>{ index: 0, tiles: [] }];

        let dashboard = await this._persistence.set(null, dashboard1);

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, dashboard1.user_id);
        assert.equal(dashboard.app, dashboard1.app);
        assert.lengthOf(dashboard.groups, 1);

        // Delete dashboard
        await this._persistence.deleteById(null, dashboard1.id);

        // Try to get delete dashboard
        dashboard = await this._persistence.getOneById(null, dashboard1.id);

        assert.isNull(dashboard || null);
    }

    public async testGetWithFilter() {
        // Create dashboards
        await this.createDashboards();

        // Get dashboards filtered by user_id and app
        let dashboards = await this._persistence.getPageByFilter(
            null,
            FilterParams.fromValue({
                user_id: DASHBOARD3.user_id,
                app: DASHBOARD3.app
            }),
            new PagingParams()
        );

        assert.isObject(dashboards);
        assert.lengthOf(dashboards.data, 1);
    }
}
