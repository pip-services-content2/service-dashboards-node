import { ConfigParams } from 'pip-services3-commons-nodex';
import { JsonFilePersister } from 'pip-services3-data-nodex';
import { DashboardsMemoryPersistence } from './DashboardsMemoryPersistence';
import { DashboardV1 } from '../data/version1/DashboardV1';
export declare class DashboardsFilePersistence extends DashboardsMemoryPersistence {
    protected _persister: JsonFilePersister<DashboardV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
