import { TLesson } from "../core/typings/response";
import { Request } from "../core/services/request.service";
import { Response } from "got";
export declare class Lessons extends Request {
    constructor(accessToken: string);
    lesson(lessonId: string | number): Promise<{
        response: Response<any>;
        body: TLesson;
    }>;
    groupLessons(eduGroup: string | number, from: string, to: string): Promise<{
        response: Response<any>;
        body: TLesson[];
    }>;
}
