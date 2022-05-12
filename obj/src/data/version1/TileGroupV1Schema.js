"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileGroupV1Schema = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const TileV1Schema_1 = require("./TileV1Schema");
class TileGroupV1Schema extends pip_services3_commons_nodex_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('title', pip_services3_commons_nodex_2.TypeCode.String);
        this.withRequiredProperty('index', pip_services3_commons_nodex_2.TypeCode.Integer);
        this.withOptionalProperty('tiles', new pip_services3_commons_nodex_3.ArraySchema(new TileV1Schema_1.TileV1Schema()));
    }
}
exports.TileGroupV1Schema = TileGroupV1Schema;
//# sourceMappingURL=TileGroupV1Schema.js.map