import { THomework, TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Homeworks extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(schoolId: string | number, from: string, to: string): Promise<{ response: Response<any>; body: THomework }> {
		const req = await this.session.get(constants.apiUrl + `/users/me/school/${schoolId}/homeworks?startDate=${from}&endDate=${to}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
