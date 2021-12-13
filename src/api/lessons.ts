import { TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Lessons extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async lesson(lessonId: string | number): Promise<{ response: Response<any>; body: TLesson }> {
		const req = await this.session.get(constants.apiUrl + `/lessons/${lessonId}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async groupLessons(eduGroup: string | number, from: string, to: string): Promise<{ response: Response<any>; body: TLesson[] }> {
		const req = await this.session.get(constants.apiUrl + `/edu-groups/${eduGroup}/lessons/${from}/${to}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
