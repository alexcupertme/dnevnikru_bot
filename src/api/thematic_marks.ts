import { TThematicMark } from "../core/typings/response/marks.type";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class ThematicMarks extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async mark(markId: string | number): Promise<{ response: TCachedResponse; body: TThematicMark }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/thematic-marks/${markId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async personMarksSubject(
		personId: string | number,
		eduGroup: string | number,
		subjectId: string | number,
		from: string,
		to: string
	): Promise<{ response: TCachedResponse; body: TThematicMark[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async personMarksPeriod(
		personId: string | number,
		eduGroup: string | number,
		subjectId: string | number,
		from: string,
		to: string
	): Promise<{ response: TCachedResponse; body: TThematicMark[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
