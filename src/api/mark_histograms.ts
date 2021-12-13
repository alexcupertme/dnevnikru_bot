import { TThematicMark } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class MarkHistograms extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async workHistogram(workId: string | number): Promise<{ response: Response<any>; body: TThematicMark }> {
		const req = await this.session.get(constants.apiUrl + `/works/${workId}/marks/histogram`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async periodHistogram(eduGroup: string | number, periodId: string | number, subjectId: string | number): Promise<{ response: Response<any>; body: TThematicMark }> {
		const req = await this.session.get(constants.apiUrl + `/periods/${periodId}/subjects/${subjectId}/groups/${eduGroup}/marks/histogram`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
