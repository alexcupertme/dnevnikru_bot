import { TSchedule } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Schedules extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async schedule(eduGroup: string | number, personId: string | number): Promise<{ response: Response<any>; body: TSchedule }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/groups/${eduGroup}/schedules`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
