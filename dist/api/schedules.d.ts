import { TSchedule } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Schedules extends Request {
    constructor(accessToken: string);
    schedule(eduGroup: string | number, personId: string | number): Promise<{
        response: Response<any>;
        body: TSchedule;
    }>;
}
