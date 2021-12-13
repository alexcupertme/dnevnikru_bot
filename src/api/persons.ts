import { TPerson, TSchoolParameters } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Persons extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async classmates(eduGroup: string | number): Promise<{ response: Response<any>; body: TPerson[] }> {
		const req = await this.session.get(constants.apiUrl + `/edu-groups/${eduGroup}/students`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async profile(personId: string | number): Promise<{ response: Response<any>; body: TPerson }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
