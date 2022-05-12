import { Descriptor } from 'pip-services3-commons-nodex';
import { CommandableHttpService } from 'pip-services3-rpc-nodex';

export class DashboardsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/dashboards');
        this._dependencyResolver.put('controller', new Descriptor('service-dashboards', 'controller', 'default', '*', '1.0'));
    }
}