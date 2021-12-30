import { TSchedule } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Schedules extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async schedule(eduGroup: string | number, personId: string | number): Promise<{ response: TCachedResponse; body: TSchedule }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/groups/${eduGroup}/schedules`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
