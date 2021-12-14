import { TPerson } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Persons extends Request {
    constructor(accessToken: string);
    classmates(eduGroup: string | number): Promise<{
        response: Response<any>;
        body: TPerson[];
    }>;
    profile(personId: string | number): Promise<{
        response: Response<any>;
        body: TPerson;
    }>;
}
