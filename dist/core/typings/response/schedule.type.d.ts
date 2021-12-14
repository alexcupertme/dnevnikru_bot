export declare type TSchedule = {
    days: {
        date: string;
        lessons: {
            id: number;
            title: string;
            date: string;
            number: number;
            subjectId: number;
            status: string;
            resultPlaceId: number;
            building: string;
            place: string;
            floor: string;
            hours: string;
            works: number[];
            teachers: number[];
        }[];
        marks: {
            id: number;
            id_str: string;
            type: string;
            value: string;
            textValue: string;
            person: number;
            person_str: string;
            work: number;
            work_str: string;
            lesson: number;
            lesson_str: string;
            number: number;
            date: string;
            workType: number;
            mood: string;
            use_avg_calc: boolean;
        }[];
        works: {
            id: number;
            id_str: string;
            type: string;
            workType: number;
            markType: string;
            markCount: number;
            lesson: number;
            lesson_str: string;
            displayInJournal: boolean;
            status: string;
            eduGroup: number;
            eduGroup_str: string;
            tasks: {
                id: number;
                id_str: string;
                person: number;
                person_str: string;
                work: number;
                work_str: string;
                status: string;
                targetDate: string;
            }[];
            text: string;
            periodNumber: number;
            periodType: string;
            subjectId: number;
            isImportant: boolean;
            targetDate: string;
            sentDate: string;
            createdBy: number;
            files: number[];
            oneDriveLinks: number[];
        }[];
        homeworks: {
            id: number;
            id_str: string;
            type: string;
            workType: number;
            markType: string;
            markCount: number;
            lesson: number;
            lesson_str: string;
            displayInJournal: boolean;
            status: string;
            eduGroup: number;
            eduGroup_str: string;
            tasks: {
                id: number;
                id_str: string;
                person: number;
                person_str: string;
                work: number;
                work_str: string;
                status: string;
                targetDate: string;
            }[];
            text: string;
            periodNumber: number;
            periodType: string;
            subjectId: number;
            isImportant: boolean;
            targetDate: string;
            sentDate: string;
            createdBy: number;
            files: number[];
            oneDriveLinks: number[];
        }[];
        subjects: {
            id: number;
            name: string;
            knowledgeAreaId: number;
        }[];
        workTypes: {
            id: number;
            schoolId: number;
            abbreviation: string;
            name: string;
            isFinal: boolean;
            isImportant: boolean;
            kindId: number;
            kind: string;
        }[];
        lessonLogEntries: {
            person: number;
            lesson: number;
            person_str: string;
            lesson_str: string;
            comment: string;
            status: string;
            createdDate: string;
        }[];
        teachers: {
            person: {
                id: number;
                id_str: string;
                userId: number;
                userId_str: string;
                firstName: string;
                lastName: string;
                middleName: string;
                shortName: string;
                sex: string;
            };
            role: string;
        }[];
        nextDate: string;
    }[];
};
export declare type TSchoolTimetable = {
    Name: string;
    Start: string;
    FirstLessonNumber: number;
    Items: {
        Id: number;
        Start: string;
        Finish: string;
        Name: string;
        Type: string;
        DaysOfWeek: string[];
        LessonNumber: number;
    }[];
}[];
