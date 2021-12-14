import { TPeriod, TPeriodGroup } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class ReportingPeriods extends Request {
    constructor(accessToken: string);
    periods(eduGroup: string | number): Promise<{
        response: Response<any>;
        body: TPeriod[];
    }>;
    periodsAndHolidays(eduGroup: string | number, personId: string | number): Promise<{
        response: Response<any>;
        body: TPeriodGroup;
    }>;
}
