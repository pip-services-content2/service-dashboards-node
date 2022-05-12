"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsProcess = void 0;
const pip_services3_container_nodex_1 = require("pip-services3-container-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
const pip_services3_swagger_nodex_1 = require("pip-services3-swagger-nodex");
const DashboardsServiceFactory_1 = require("../build/DashboardsServiceFactory");
class DashboardsProcess extends pip_services3_container_nodex_1.ProcessContainer {
    constructor() {
        super("dashboards", "Application dashboards microservice");
        this._factories.add(new DashboardsServiceFactory_1.DashboardsServiceFactory);
        this._factories.add(new pip_services3_rpc_nodex_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_swagger_nodex_1.DefaultSwaggerFactory);
    }
}
exports.DashboardsProcess = DashboardsProcess;
//# sourceMappingURL=DashboardsProcess.js.map