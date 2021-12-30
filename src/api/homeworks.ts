import { THomework, TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Homeworks extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(schoolId: string | number, from: string, to: string): Promise<{ response: TCachedResponse; body: THomework }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/users/me/school/${schoolId}/homeworks?startDate=${from}&endDate=${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
