"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsController = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const DashboardsCommandSet_1 = require("./DashboardsCommandSet");
class DashboardsController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_nodex_2.DependencyResolver(DashboardsController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new DashboardsCommandSet_1.DashboardsCommandSet(this);
        return this._commandSet;
    }
    makeDashboardId(userId, app, kind) {
        let id = userId + "_" + app;
        if (kind)
            id += "_" + kind;
        return id;
    }
    getDashboards(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let page = yield this._persistence.getPageByFilter(correlationId, filter, paging);
            if (page)
                for (let d of page.data)
                    delete d.id;
            return page;
        });
    }
    getDashboard(correlationId, userId, app, kind) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = this.makeDashboardId(userId, app, kind);
            let dashboard = yield this._persistence.getOneById(correlationId, id);
            if (dashboard == null) {
                dashboard = {
                    user_id: userId,
                    app: app,
                    kind: kind
                };
            }
            if (dashboard)
                delete dashboard.id;
            return dashboard;
        });
    }
    setDashboard(correlationId, dashboard) {
        return __awaiter(this, void 0, void 0, function* () {
            dashboard.id = this.makeDashboardId(dashboard.user_id, dashboard.app, dashboard.kind);
            dashboard = yield this._persistence.set(correlationId, dashboard);
            if (dashboard)
                delete dashboard.id;
            return dashboard;
        });
    }
    deleteDashboards(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._persistence.deleteByFilter(correlationId, filter);
        });
    }
}
exports.DashboardsController = DashboardsController;
DashboardsController._defaultConfig = pip_services3_commons_nodex_1.ConfigParams.fromTuples('dependencies.persistence', 'service-dashboards:persistence:*:*:1.0');
//# sourceMappingURL=DashboardsController.js.map