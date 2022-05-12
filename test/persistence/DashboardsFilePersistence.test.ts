import { DashboardsFilePersistence } from '../../src/persistence/DashboardsFilePersistence';
import { DashboardsPersistenceFixture } from './DashboardsPersistenceFixture';

suite('DashboardsFilePersistence', ()=> {
    let persistence: DashboardsFilePersistence;
    let fixture: DashboardsPersistenceFixture;
    
    setup(async () => {
        persistence = new DashboardsFilePersistence('./data/Dashboards.test.json');

        fixture = new DashboardsPersistenceFixture(persistence);
        
        await persistence.open(null);
        await persistence.clear(null);
    });
    
    teardown(async () => {
        await persistence.close(null);
    });
        
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    test('Get with Filters', async () => {
        await fixture.testGetWithFilter();
    });

});