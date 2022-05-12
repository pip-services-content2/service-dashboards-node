"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsServiceFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const DashboardsMongoDbPersistence_1 = require("../persistence/DashboardsMongoDbPersistence");
const DashboardsFilePersistence_1 = require("../persistence/DashboardsFilePersistence");
const DashboardsMemoryPersistence_1 = require("../persistence/DashboardsMemoryPersistence");
const DashboardsController_1 = require("../logic/DashboardsController");
const DashboardsHttpServiceV1_1 = require("../services/version1/DashboardsHttpServiceV1");
class DashboardsServiceFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(DashboardsServiceFactory.MemoryPersistenceDescriptor, DashboardsMemoryPersistence_1.DashboardsMemoryPersistence);
        this.registerAsType(DashboardsServiceFactory.FilePersistenceDescriptor, DashboardsFilePersistence_1.DashboardsFilePersistence);
        this.registerAsType(DashboardsServiceFactory.MongoDbPersistenceDescriptor, DashboardsMongoDbPersistence_1.DashboardsMongoDbPersistence);
        this.registerAsType(DashboardsServiceFactory.ControllerDescriptor, DashboardsController_1.DashboardsController);
        this.registerAsType(DashboardsServiceFactory.HttpServiceDescriptor, DashboardsHttpServiceV1_1.DashboardsHttpServiceV1);
    }
}
exports.DashboardsServiceFactory = DashboardsServiceFactory;
DashboardsServiceFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "factory", "default", "default", "1.0");
DashboardsServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "persistence", "memory", "*", "1.0");
DashboardsServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "persistence", "file", "*", "1.0");
DashboardsServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "persistence", "mongodb", "*", "1.0");
DashboardsServiceFactory.ControllerDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "controller", "default", "*", "1.0");
DashboardsServiceFactory.HttpServiceDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-dashboards", "service", "http", "*", "1.0");
//# sourceMappingURL=DashboardsServiceFactory.js.map