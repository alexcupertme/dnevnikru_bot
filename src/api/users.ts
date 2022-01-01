import { TUser } from "../core/typings/response/user.type";
import { constants } from "../core/constants";
// import { userModel } from "../core/schemas/user.schema";
import { DnevnikRuRequest } from "../core/services/request/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Users extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async me(): Promise<{ response: TCachedResponse; body: TUser }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + "/users/me",
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async user(userId: string | number): Promise<{ response: TCachedResponse; body: TUser }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/users/${userId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async meRoles(): Promise<{ response: TCachedResponse; body: string[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + "/users/me/roles",
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async usersMany(userIds: Array<string | number>): Promise<{ response: TCachedResponse; body: TUser[] }> {
		const req = await this.sendCached({
			json: userIds,
			method: "POST",
			url: constants.apiUrl + "/users/many",
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async userRoles(userId: string | number): Promise<{ response: TCachedResponse; body: string[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/users/${userId}/roles`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
