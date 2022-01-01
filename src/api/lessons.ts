import { TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Lessons extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async lesson(lessonId: string | number): Promise<{ response: TCachedResponse; body: TLesson }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/lessons/${lessonId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async groupLessons(eduGroup: string | number, from: string, to: string): Promise<{ response: TCachedResponse; body: TLesson[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}/lessons/${from}/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
