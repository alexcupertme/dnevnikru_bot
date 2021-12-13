import { TContext } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Context extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(): Promise<{ response: Response<any>; body: TContext }> {
		const req = await this.session.get(constants.apiUrl + `/users/me/context`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
	public async user(userId: string | number): Promise<{ response: Response<any>; body: TContext }> {
		const req = await this.session.get(constants.apiUrl + `/users/${userId}/context`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
