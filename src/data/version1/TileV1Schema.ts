import { ObjectSchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';

export class TileV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('title', TypeCode.Map);
        this.withRequiredProperty('index', TypeCode.Integer);
        this.withRequiredProperty('size', TypeCode.String);
        this.withRequiredProperty('color', TypeCode.String);
        this.withOptionalProperty('params', null); //TypeCode.Object);
    }
}
