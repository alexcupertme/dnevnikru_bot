import { TPerson, TSchoolParameters } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Persons extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async classmates(eduGroup: string | number): Promise<{ response: TCachedResponse; body: TPerson[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/students`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async profile(personId: string | number): Promise<{ response: TCachedResponse; body: TPerson }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
