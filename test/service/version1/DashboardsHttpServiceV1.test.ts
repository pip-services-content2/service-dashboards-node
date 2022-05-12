const restify = require('restify');
const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { TileGroupV1 } from '../../../src/data/version1/TileGroupV1';
import { DashboardV1 } from '../../../src/data/version1/DashboardV1';
import { DashboardsMemoryPersistence } from '../../../src/persistence/DashboardsMemoryPersistence';
import { DashboardsController } from '../../../src/logic/DashboardsController';
import { DashboardsHttpServiceV1 } from '../../../src/services/version1/DashboardsHttpServiceV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

let DASHBOARD = <DashboardV1>{
    user_id: '1',
    app: 'Test App 1',
    groups: []
};

suite('DashboardsHttpServiceV1', ()=> {
    let service: DashboardsHttpServiceV1;

    let rest: any;

    suiteSetup(async () => {
        let persistence = new DashboardsMemoryPersistence();
        let controller = new DashboardsController();

        service = new DashboardsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('service-dashboards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-dashboards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-dashboards', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        await service.open(null);
    });
    
    suiteTeardown(async () => {
        await service.close(null);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });
    
    test('CRUD Operations', async () => {
        let dashboard1: DashboardV1;

        // Get dashboard
        let dashboard = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/dashboards/get_dashboard',
                {
                    user_id: DASHBOARD.user_id,
                    app: DASHBOARD.app
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });
        
        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD.user_id);
        assert.equal(dashboard.app, DASHBOARD.app);

        dashboard1 = dashboard;

        // Set dashboard
        dashboard1.groups = [<TileGroupV1>{ index: 0, tiles: [] }];

        dashboard = await new Promise<any>((resolve, reject) => {
            rest.post('/v1/dashboards/set_dashboard',
                {
                    dashboard: dashboard1
                },
                (err, req, res, result) => {
                    if (err == null) resolve(result);
                    else reject(err);
                }
            );
        });

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, dashboard1.user_id);
        assert.equal(dashboard.app, dashboard1.app);
        assert.lengthOf(dashboard.groups, 1);
    });
});