import { TAvgGroupMark, TFinalMarks, TRecentMarks, TThematicMark, TWeightedMarks } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Marks extends Request {
    constructor(accessToken: string);
    mark(markId: string | number): Promise<{
        response: Response<any>;
        body: TThematicMark;
    }>;
    recent(personId: string | number, eduGroup: string | number, from: string, subjectId: string | number, limit: string | number): Promise<{
        response: Response<any>;
        body: TRecentMarks;
    }>;
    wAvgMarks(eduGroup: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: TWeightedMarks;
    }>;
    finalMarksGroup(eduGroup: string | number): Promise<{
        response: Response<any>;
        body: TFinalMarks;
    }>;
    finalMarksPerson(eduGroup: string | number, personId: string | number): Promise<{
        response: Response<any>;
        body: TFinalMarks;
    }>;
    fullFinalMarksPerson(eduGroup: string | number, personId: string | number): Promise<{
        response: Response<any>;
        body: TFinalMarks;
    }>;
    avgMark(periodId: string | number, personId: string | number): Promise<{
        response: Response<any>;
        body: string;
    }>;
    avgMarkSubject(periodId: string | number, personId: string | number, subjectId: string | number): Promise<{
        response: Response<any>;
        body: string;
    }>;
    avgMarksGroup(eduGroup: string | number, periodId: string | number, to: string): Promise<{
        response: Response<any>;
        body: TAvgGroupMark[];
    }>;
    avgMarksPeriod(eduGroup: string | number, periodId: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: TAvgGroupMark[];
    }>;
}
