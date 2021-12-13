import { TEduGroup, TEduGroupWithStudents, THomework, TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { Request } from "../core/services/request.service";
import { Response } from "got";

export class EduGroups extends Request {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async group(eduGroup: string | number): Promise<{ response: Response<any>; body: TEduGroup }> {
		const req = await this.session.get(constants.apiUrl + `/edu-groups/${eduGroup}`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async currentPersonGroups(personId: string | number): Promise<{ response: Response<any>; body: TEduGroup[] }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/edu-groups`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async allPersonGroups(personId: string | number): Promise<{ response: Response<any>; body: TEduGroup[] }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/edu-groups/all`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async schoolPersonGroups(personId: string | number, schoolId: string | number): Promise<{ response: Response<any>; body: TEduGroup[] }> {
		const req = await this.session.get(constants.apiUrl + `/persons/${personId}/schools/${schoolId}/edu-groups`);
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async groupsWithStudents(groupIds: Array<string | number>): Promise<{ response: Response<any>; body: TEduGroupWithStudents[] }> {
		const req = await this.session.post(constants.apiUrl + `/edu-groups/students`, {
			json: groupIds,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
