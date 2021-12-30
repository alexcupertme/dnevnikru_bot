import { TThematicMark } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class MarkHistograms extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async workHistogram(workId: string | number): Promise<{ response: TCachedResponse; body: TThematicMark }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/works/${workId}/marks/histogram`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async periodHistogram(eduGroup: string | number, periodId: string | number, subjectId: string | number): Promise<{ response: TCachedResponse; body: TThematicMark }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/periods/${periodId}/subjects/${subjectId}/groups/${eduGroup}/marks/histogram`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
