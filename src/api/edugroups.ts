import { TEduGroup, TEduGroupWithStudents, THomework, TLesson } from "../core/typings/response";
import { constants } from "../core/constants";
import { DnevnikRuRequest } from "../core/services/dnevnikru_request.service";
import { Response } from "got";
import { TCachedResponse } from "../core/typings/cached_response.type";

export class EduGroups extends DnevnikRuRequest {
	constructor(accessToken: string) {
		super(accessToken);
	}
	public async group(eduGroup: string | number): Promise<{ response: TCachedResponse; body: TEduGroup }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/edu-groups/${eduGroup}`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async currentPersonGroups(personId: string | number): Promise<{ response: TCachedResponse; body: TEduGroup[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async allPersonGroups(personId: string | number): Promise<{ response: TCachedResponse; body: TEduGroup[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/edu-groups/all`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async schoolPersonGroups(personId: string | number, schoolId: string | number): Promise<{ response: TCachedResponse; body: TEduGroup[] }> {
		const req = await this.sendCached({
			method: "GET",
			url: constants.apiUrl + `/persons/${personId}/schools/${schoolId}/edu-groups`,
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}

	public async groupsWithStudents(groupIds: Array<string | number>): Promise<{ response: TCachedResponse; body: TEduGroupWithStudents[] }> {
		const req = await this.sendCached({
			json: groupIds,
			url: constants.apiUrl + `/edu-groups/students`,
			method: "POST",
		});
		return {
			response: req,
			body: JSON.parse(req.body),
		};
	}
}
