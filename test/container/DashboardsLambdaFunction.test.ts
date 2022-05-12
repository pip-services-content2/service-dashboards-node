const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';

import { TileGroupV1 } from '../../src/data/version1/TileGroupV1';
import { DashboardV1 } from '../../src/data/version1/DashboardV1';
import { DashboardsLambdaFunction } from '../../src/container/DashboardsLambdaFunction';

let DASHBOARD = <DashboardV1>{
    user_id: '1',
    app: 'Test App 1',
    groups: []
};

suite('DashboardsLambdaFunction', ()=> {
    let lambda: DashboardsLambdaFunction;

    suiteSetup(async () => {
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'persistence.descriptor', 'service-dashboards:persistence:memory:default:1.0',
            'controller.descriptor', 'service-dashboards:controller:default:default:1.0'
        );

        lambda = new DashboardsLambdaFunction();
        lambda.configure(config);
        await lambda.open(null);
    });
    
    suiteTeardown(async () => {
        await lambda.close(null);
    });
    
    test('CRUD Operations', async () => {
        let dashboard1: DashboardV1;

        // Create one dashboard
        let dashboard = await lambda.act(
            {
                role: 'dashboards',
                cmd: 'get_dashboard',
                user_id: DASHBOARD.user_id,
                app: DASHBOARD.app
            }
        );

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD.user_id);
        assert.equal(dashboard.app, DASHBOARD.app);

        dashboard1 = dashboard;

        // Set the dashboard
        dashboard1.groups = [<TileGroupV1>{ index: 0, tiles: [] }];

        dashboard = await lambda.act(
            {
                role: 'dashboards',
                cmd: 'set_dashboard',
                dashboard: dashboard1
            }
        );

        assert.isObject(dashboard);
        assert.equal(dashboard.app, DASHBOARD.app);
        assert.lengthOf(dashboard.groups, 1);

        dashboard1 = dashboard;

        // Delete dashboard
        await lambda.act(
            {
                role: 'dashboards',
                cmd: 'delete_dashboards',
                filter: {
                    user_id: DASHBOARD.user_id,
                    app: DASHBOARD.app
                }
            }
        );
    });
});