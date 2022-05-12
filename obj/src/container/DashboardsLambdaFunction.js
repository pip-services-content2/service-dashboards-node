"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.DashboardsLambdaFunction = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
const DashboardsServiceFactory_1 = require("../build/DashboardsServiceFactory");
class DashboardsLambdaFunction extends pip_services3_aws_nodex_1.CommandableLambdaFunction {
    constructor() {
        super("dashboards", "Application dashboards function");
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'controller', 'default', '*', '*'));
        this._factories.add(new DashboardsServiceFactory_1.DashboardsServiceFactory());
    }
}
exports.DashboardsLambdaFunction = DashboardsLambdaFunction;
exports.handler = new DashboardsLambdaFunction().getHandler();
//# sourceMappingURL=DashboardsLambdaFunction.js.map