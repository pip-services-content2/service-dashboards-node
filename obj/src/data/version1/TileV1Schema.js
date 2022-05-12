"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileV1Schema = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
class TileV1Schema extends pip_services3_commons_nodex_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('title', pip_services3_commons_nodex_2.TypeCode.Map);
        this.withRequiredProperty('index', pip_services3_commons_nodex_2.TypeCode.Integer);
        this.withRequiredProperty('size', pip_services3_commons_nodex_2.TypeCode.String);
        this.withRequiredProperty('color', pip_services3_commons_nodex_2.TypeCode.String);
        this.withOptionalProperty('params', null); //TypeCode.Object);
    }
}
exports.TileV1Schema = TileV1Schema;
//# sourceMappingURL=TileV1Schema.js.map