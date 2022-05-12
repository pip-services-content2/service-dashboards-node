import { DashboardsMemoryPersistence } from '../../src/persistence/DashboardsMemoryPersistence';
import { DashboardsPersistenceFixture } from './DashboardsPersistenceFixture';

suite('DashboardsMemoryPersistence', ()=> {
    let persistence: DashboardsMemoryPersistence;
    let fixture: DashboardsPersistenceFixture;
    
    setup(async () => {
        persistence = new DashboardsMemoryPersistence();
        fixture = new DashboardsPersistenceFixture(persistence);
        
        await persistence.open(null);
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