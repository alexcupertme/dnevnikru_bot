import { TThematicMark } from "../core/typings/response/marks.type";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class ThematicMarks extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async mark(markId: string | number): Promise<{ response: Response<any>; body: TThematicMark }> {
		const req = await this.session.get(constants.apiUrl + `/thematic-marks/${markId}`);
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
	): Promise<{ response: Response<any>; body: TThematicMark[] }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`);
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
	): Promise<{ response: Response<any>; body: TThematicMark[] }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/edu-groups/${eduGroup}/subjects/${subjectId}/thematic-marks/${from}/${to}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
