import { TThematicMark } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class MarkHistograms extends Request {
    constructor(accessToken: string);
    workHistogram(workId: string | number): Promise<{
        response: Response<any>;
        body: TThematicMark;
    }>;
    periodHistogram(eduGroup: string | number, periodId: string | number, subjectId: string | number): Promise<{
        response: Response<any>;
        body: TThematicMark;
    }>;
}
