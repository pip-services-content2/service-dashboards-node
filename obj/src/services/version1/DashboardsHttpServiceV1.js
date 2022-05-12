"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsHttpServiceV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class DashboardsHttpServiceV1 extends pip_services3_rpc_nodex_1.CommandableHttpService {
    constructor() {
        super('v1/dashboards');
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'controller', 'default', '*', '1.0'));
    }
}
exports.DashboardsHttpServiceV1 = DashboardsHttpServiceV1;
//# sourceMappingURL=DashboardsHttpServiceV1.js.map