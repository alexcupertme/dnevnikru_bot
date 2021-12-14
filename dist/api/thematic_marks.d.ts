import { TThematicMark } from "../core/typings/response/marks.type";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class ThematicMarks extends Request {
    constructor(accessToken: string);
    mark(markId: string | number): Promise<{
        response: Response<any>;
        body: TThematicMark;
    }>;
    personMarksSubject(personId: string | number, eduGroup: string | number, subjectId: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: TThematicMark[];
    }>;
    personMarksPeriod(personId: string | number, eduGroup: string | number, subjectId: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: TThematicMark[];
    }>;
}
