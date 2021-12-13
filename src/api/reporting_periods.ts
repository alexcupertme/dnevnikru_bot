import { TPeriod, TPeriodGroup } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class ReportingPeriods extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async periods(eduGroup: string | number): Promise<{ response: Response<any>; body: TPeriod[] }> {
		const req = await this.session.get(constants.apiUrl + `/edu-groups/${eduGroup}/reporting-periods`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async periodsAndHolidays(eduGroup: string | number, personId: string | number): Promise<{ response: Response<any>; body: TPeriodGroup }> {
		const req = await this.session.get(constants.apiUrl + `/edu-groups/${eduGroup}/reporting-period-group`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
