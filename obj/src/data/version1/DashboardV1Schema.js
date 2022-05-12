"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardV1Schema = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const TileGroupV1Schema_1 = require("./TileGroupV1Schema");
class DashboardV1Schema extends pip_services3_commons_nodex_1.ObjectSchema {
    constructor() {
        super();
        /* Identification */
        this.withOptionalProperty('id', pip_services3_commons_nodex_3.TypeCode.String);
        this.withRequiredProperty('user_id', pip_services3_commons_nodex_3.TypeCode.String);
        this.withRequiredProperty('app', pip_services3_commons_nodex_3.TypeCode.String);
        this.withOptionalProperty('kind', pip_services3_commons_nodex_3.TypeCode.String);
        /* Content */
        this.withOptionalProperty('groups', new pip_services3_commons_nodex_2.ArraySchema(new TileGroupV1Schema_1.TileGroupV1Schema()));
    }
}
exports.DashboardV1Schema = DashboardV1Schema;
//# sourceMappingURL=DashboardV1Schema.js.map