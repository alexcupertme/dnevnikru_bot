import { TEduGroup, TEduGroupWithStudents } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class EduGroups extends Request {
    constructor(accessToken: string);
    group(eduGroup: string | number): Promise<{
        response: Response<any>;
        body: TEduGroup;
    }>;
    currentPersonGroups(personId: string | number): Promise<{
        response: Response<any>;
        body: TEduGroup[];
    }>;
    allPersonGroups(personId: string | number): Promise<{
        response: Response<any>;
        body: TEduGroup[];
    }>;
    schoolPersonGroups(personId: string | number, schoolId: string | number): Promise<{
        response: Response<any>;
        body: TEduGroup[];
    }>;
    groupsWithStudents(groupIds: Array<string | number>): Promise<{
        response: Response<any>;
        body: TEduGroupWithStudents[];
    }>;
}
