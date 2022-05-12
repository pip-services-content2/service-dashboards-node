import { ObjectSchema } from 'pip-services3-commons-nodex';
import { ArraySchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';

import { TileGroupV1Schema } from './TileGroupV1Schema';

export class DashboardV1Schema extends ObjectSchema {
    public constructor() {
        super();
    
        /* Identification */
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('user_id', TypeCode.String);
        this.withRequiredProperty('app', TypeCode.String);
        this.withOptionalProperty('kind', TypeCode.String);

        /* Content */
        this.withOptionalProperty('groups', new ArraySchema(new TileGroupV1Schema()));
    }
}
