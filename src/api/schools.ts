import { TIncludedCity, TPersonSchool, TSchool, TSchoolParameters, TSchoolUser } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class Schools extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}

	public async parameters(schoolId: string | number): Promise<{ response: TCachedResponse; body: TSchoolParameters }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/schools/${schoolId}/parameters`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async schoolProfile(schoolId: string | number): Promise<{ response: TCachedResponse; body: TSchool }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/schools/${schoolId}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async personSchools(): Promise<{ response: TCachedResponse; body: TPersonSchool[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/schools/person-schools`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async includedCities(): Promise<{ response: TCachedResponse; body: TIncludedCity[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/schools/cities`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async users(schoolId: string | number): Promise<{ response: TCachedResponse; body: TSchoolUser[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/schools/${schoolId}/membership`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
