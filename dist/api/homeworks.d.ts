import { THomework } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Homeworks extends Request {
    constructor(accessToken: string);
    me(schoolId: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: THomework;
    }>;
}
