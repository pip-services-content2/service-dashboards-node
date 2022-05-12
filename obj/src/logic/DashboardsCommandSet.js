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
exports.DashboardsCommandSet = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_4 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_5 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_6 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_7 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_8 = require("pip-services3-commons-nodex");
const DashboardV1Schema_1 = require("../data/version1/DashboardV1Schema");
class DashboardsCommandSet extends pip_services3_commons_nodex_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetDashboardsCommand());
        this.addCommand(this.makeGetDashboardCommand());
        this.addCommand(this.makeSetDashboardCommand());
        this.addCommand(this.makeDeleteDashboardsCommand());
    }
    makeGetDashboardsCommand() {
        return new pip_services3_commons_nodex_2.Command("get_dashboards", new pip_services3_commons_nodex_5.ObjectSchema(true)
            .withOptionalProperty('filter', new pip_services3_commons_nodex_7.FilterParamsSchema())
            .withOptionalProperty('paging', new pip_services3_commons_nodex_8.PagingParamsSchema()), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let filter = pip_services3_commons_nodex_3.FilterParams.fromValue(args.get("filter"));
            let paging = pip_services3_commons_nodex_4.PagingParams.fromValue(args.get("paging"));
            return yield this._logic.getDashboards(correlationId, filter, paging);
        }));
    }
    makeGetDashboardCommand() {
        return new pip_services3_commons_nodex_2.Command("get_dashboard", new pip_services3_commons_nodex_5.ObjectSchema(true)
            .withRequiredProperty('user_id', pip_services3_commons_nodex_6.TypeCode.String)
            .withRequiredProperty('app', pip_services3_commons_nodex_6.TypeCode.String)
            .withOptionalProperty('kind', pip_services3_commons_nodex_6.TypeCode.String), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let userId = args.getAsNullableString("user_id");
            let app = args.getAsNullableString("app");
            let kind = args.getAsNullableString("kind");
            return yield this._logic.getDashboard(correlationId, userId, app, kind);
        }));
    }
    makeSetDashboardCommand() {
        return new pip_services3_commons_nodex_2.Command("set_dashboard", new pip_services3_commons_nodex_5.ObjectSchema(true)
            .withRequiredProperty('dashboard', new DashboardV1Schema_1.DashboardV1Schema()), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let dashboard = args.get("dashboard");
            return yield this._logic.setDashboard(correlationId, dashboard);
        }));
    }
    makeDeleteDashboardsCommand() {
        return new pip_services3_commons_nodex_2.Command("delete_dashboards", new pip_services3_commons_nodex_5.ObjectSchema(true)
            .withOptionalProperty('filter', new pip_services3_commons_nodex_7.FilterParamsSchema()), (correlationId, args) => __awaiter(this, void 0, void 0, function* () {
            let filter = pip_services3_commons_nodex_3.FilterParams.fromValue(args.get("filter"));
            return yield this._logic.deleteDashboards(correlationId, filter);
        }));
    }
}
exports.DashboardsCommandSet = DashboardsCommandSet;
//# sourceMappingURL=DashboardsCommandSet.js.map