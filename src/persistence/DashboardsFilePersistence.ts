import { ConfigParams } from 'pip-services3-commons-nodex';
import { JsonFilePersister } from 'pip-services3-data-nodex';

import { DashboardsMemoryPersistence } from './DashboardsMemoryPersistence';
import { DashboardV1 } from '../data/version1/DashboardV1';

export class DashboardsFilePersistence extends DashboardsMemoryPersistence {
	protected _persister: JsonFilePersister<DashboardV1>;

    public constructor(path?: string) {
        super();

        this._persister = new JsonFilePersister<DashboardV1>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
        this._persister.configure(config);
    }

}