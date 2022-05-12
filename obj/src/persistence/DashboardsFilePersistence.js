"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsFilePersistence = void 0;
const pip_services3_data_nodex_1 = require("pip-services3-data-nodex");
const DashboardsMemoryPersistence_1 = require("./DashboardsMemoryPersistence");
class DashboardsFilePersistence extends DashboardsMemoryPersistence_1.DashboardsMemoryPersistence {
    constructor(path) {
        super();
        this._persister = new pip_services3_data_nodex_1.JsonFilePersister(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }
    configure(config) {
        super.configure(config);
        this._persister.configure(config);
    }
}
exports.DashboardsFilePersistence = DashboardsFilePersistence;
//# sourceMappingURL=DashboardsFilePersistence.js.map