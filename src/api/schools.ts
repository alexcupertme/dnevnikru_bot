import { TIncludedCity, TPersonSchool, TSchool, TSchoolParameters, TSchoolUser } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class Schools extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}

	public async parameters(schoolId: string | number): Promise<{ response: Response<any>; body: TSchoolParameters }> {
		const req = await this.session.get(constants.apiUrl + `/schools/${schoolId}/parameters`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async schoolProfile(schoolId: string | number): Promise<{ response: Response<any>; body: TSchool }> {
		const req = await this.session.get(constants.apiUrl + `/schools/${schoolId}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async personSchools(): Promise<{ response: Response<any>; body: TPersonSchool[] }> {
		const req = await this.session.get(constants.apiUrl + `/schools/person-schools`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async includedCities(): Promise<{ response: Response<any>; body: TIncludedCity[] }> {
		const req = await this.session.get(constants.apiUrl + `/schools/cities`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async users(schoolId: string | number): Promise<{ response: Response<any>; body: TSchoolUser[] }> {
		const req = await this.session.get(constants.apiUrl + `/schools/${schoolId}/membership`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
