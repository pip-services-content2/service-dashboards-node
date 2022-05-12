import { DataPage, FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';

import { DashboardV1 } from '../data/version1/DashboardV1';
import { IDashboardsPersistence } from './IDashboardsPersistence';

export class DashboardsMongoDbPersistence 
    extends IdentifiableMongoDbPersistence<DashboardV1, string> 
    implements IDashboardsPersistence {

    constructor() {
        super('dashboards');
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();

        let criteria = [];

        let id = filter.getAsNullableString('id');
        if (id != null)
            criteria.push({ _id: id });

        let user_id = filter.getAsNullableString('user_id');
        if (user_id != null)
            criteria.push({ user_id: user_id });

        let app = filter.getAsNullableString('app');
        if (app != null)
            criteria.push({ app: app });

        let kind = filter.getAsNullableString('kind');
        if (kind != null)
            criteria.push({ kind: kind });

        return criteria.length > 0 ? { $and: criteria } : {};
    }

    public async getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>> {
        return await super.getPageByFilter(correlationId, this.composeFilter(filter), paging, '_id', null);
    }

    public async deleteByFilter(correlationId: string, filter: FilterParams): Promise<void> {
        return await super.deleteByFilter(correlationId, this.composeFilter(filter));
    }

}
