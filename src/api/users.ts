import { TUser } from "../core/typings/response/user.type";
import { constants } from "../core/constants";
import { userModel } from "../core/schemas/user.schema";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Users extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(): Promise<{ response: Response<any>; body: TUser }> {
		const req = await this.session.get(constants.apiUrl + "/users/me");
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async user(userId: string | number): Promise<{ response: Response<any>; body: TUser }> {
		const req = await this.session.get(constants.apiUrl + `/users/${userId}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async meRoles(): Promise<{ response: Response<any>; body: string[] }> {
		const req = await this.session.get(constants.apiUrl + "/users/me/roles");
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async usersMany(userIds: Array<string | number>): Promise<{ response: Response<any>; body: TUser[] }> {
		const req = await this.session.post(constants.apiUrl + "/users/many", {
			json: userIds,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async userRoles(userId: string | number): Promise<{ response: Response<any>; body: string[] }> {
		const req = await this.session.get(constants.apiUrl + `/users/${userId}/roles`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
