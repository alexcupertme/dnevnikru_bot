import { TPeriod, TPeriodGroup } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class ReportingPeriods extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async periods(eduGroup: string | number): Promise<{ response: TCachedResponse; body: TPeriod[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/reporting-periods`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async periodsAndHolidays(eduGroup: string | number, personId: string | number): Promise<{ response: TCachedResponse; body: TPeriodGroup }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/reporting-period-group`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
