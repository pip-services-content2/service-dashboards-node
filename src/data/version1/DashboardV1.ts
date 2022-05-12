import { IStringIdentifiable } from 'pip-services3-commons-nodex';

import { TileGroupV1 } from './TileGroupV1';

export class DashboardV1 implements IStringIdentifiable {
    /* Identification */
    public id: string;
    public user_id: string;
    public app: string;
    public kind?: string;

    /* Content */
    public groups: TileGroupV1[];
}
