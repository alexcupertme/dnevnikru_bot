export declare type TUserFeed = {
    days: {
        date: string;
        nextWorkingDayDate: string;
        summary: {
            importantWorks: {
                work: {
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
                };
                subjectName: string;
                workTypeName: string;
            }[];
            marksCards: {
                marks: {
                    mark: {
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
                    };
                }[];
                lesson: {
                    id: number;
                    date: string;
                };
                isImportant: boolean;
                subjectName: string;
                subjectId: number;
                workTypeName: string;
            }[];
            dayEmotion: string;
            feedMode: string;
        };
        nextDayHomeworks: {
            work: {
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
            };
            subjectName: string;
            workTypeName: string;
        }[];
        nextDaySchedule: {
            lessonId: number;
            lessonStatus: string;
            number: number;
            subjectName: string;
            importantWorkTypes: {
                id: number;
                name: string;
            }[];
        }[];
        todayHomeworks: {
            work: {
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
            };
            subjectName: string;
            workTypeName: string;
        }[];
        todaySchedule: {
            lessonId: number;
            lessonStatus: string;
            number: number;
            subjectName: string;
            importantWorkTypes: {
                id: number;
                name: string;
            }[];
        }[];
        logEntries: {
            lessonLogEntry: {
                person: number;
                lesson: number;
                person_str: string;
                lesson_str: string;
                comment: string;
                status: string;
                createdDate: string;
            };
            subjectName: string;
            lessonTitle: string;
        }[];
    }[];
};
