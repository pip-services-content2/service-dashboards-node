import { CommandSet } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';
import { FilterParamsSchema } from 'pip-services3-commons-nodex';
import { PagingParamsSchema } from 'pip-services3-commons-nodex';

import { DashboardV1 } from '../data/version1/DashboardV1';
import { DashboardV1Schema } from '../data/version1/DashboardV1Schema';
import { IDashboardsController } from './IDashboardsController';

export class DashboardsCommandSet extends CommandSet {
    private _logic: IDashboardsController;

	constructor(logic: IDashboardsController) {
		super();

		this._logic = logic;

		// Register commands to the database
		this.addCommand(this.makeGetDashboardsCommand());
		this.addCommand(this.makeGetDashboardCommand());
		this.addCommand(this.makeSetDashboardCommand());
		this.addCommand(this.makeDeleteDashboardsCommand());
	}

	private makeGetDashboardsCommand(): ICommand {
		return new Command(
			"get_dashboards",
			new ObjectSchema(true)
				.withOptionalProperty('filter', new FilterParamsSchema())
				.withOptionalProperty('paging', new PagingParamsSchema()),
			async (correlationId: string, args: Parameters) => {
				let filter = FilterParams.fromValue(args.get("filter"));
				let paging = PagingParams.fromValue(args.get("paging"));
				return await this._logic.getDashboards(correlationId, filter, paging);
			}
		);
	}

	private makeGetDashboardCommand(): ICommand {
		return new Command(
			"get_dashboard",
			new ObjectSchema(true)
				.withRequiredProperty('user_id', TypeCode.String)
				.withRequiredProperty('app', TypeCode.String)
				.withOptionalProperty('kind', TypeCode.String),
			async (correlationId: string, args: Parameters) => {
				let userId = args.getAsNullableString("user_id");
				let app = args.getAsNullableString("app");
				let kind = args.getAsNullableString("kind");
				return await this._logic.getDashboard(correlationId, userId, app, kind);
			}
		);
	}

	private makeSetDashboardCommand(): ICommand {
		return new Command(
			"set_dashboard",
			new ObjectSchema(true)
				.withRequiredProperty('dashboard', new DashboardV1Schema()),
			async (correlationId: string, args: Parameters) => {
				let dashboard = args.get("dashboard");
				return await this._logic.setDashboard(correlationId, dashboard);
			}
		);
	}

	private makeDeleteDashboardsCommand(): ICommand {
		return new Command(
			"delete_dashboards",
			new ObjectSchema(true)
				.withOptionalProperty('filter', new FilterParamsSchema()),
			async (correlationId: string, args: Parameters) => {
				let filter = FilterParams.fromValue(args.get("filter"));
				return await this._logic.deleteDashboards(correlationId, filter);
			}
		);
	}

}