export type TUser = {
	id: number;
	id_str: string;
	personId: number;
	personId_str: string;
	name: string;
	email: string;
	login: string;
	fullName: string;
	fullNameInverse: string;
	firstName: string;
	middleName: string;
	lastName: string;
	shortName: string;
	locale: string;
	timezone: string;
	sex: string;
	photoSmall: string;
	photoMedium: string;
	photoLarge: string;
	birthday: string;
	roles: string[];
};

export type TContext = {
	userId: number;
	avatarUrl: string;
	roles: string[];
	children: {
		personId: number;
		firstName: string;
		lastName: string;
		middleName: string;
		shortName: string;
		schoolIds: number[];
		groupIds: number[];
	}[];
	schools: {
		id: number;
		name: string;
		type: string;
		groupIds: number[];
	}[];
	eduGroups: {
		id: number;
		id_str: string;
		parentIds: number[];
		parentIds_str: string[];
		type: string;
		name: string;
		fullName: string;
		parallel: number;
		timetable: number;
		timetable_str: string;
		status: string;
		studyyear: number;
		educationType: string;
		subjects: {
			id: number;
			id_str: string;
			name: string;
			knowledgeArea: string;
			fgosSubjectId: number;
		}[];
		journaltype: string;
	}[];
	splitId: string;
	personId: number;
	firstName: string;
	lastName: string;
	middleName: string;
	shortName: string;
	schoolIds: number[];
	groupIds: number[];
};

/* TODO
Type made for:
1. Users
2. UserFeeds
3. ThematicMarks
4. Subjects
5. SchoolParameters
6. Schools
7. Persons
8. Schedules
9. ReportingPeriods
10. RecentMarks
11. MarkValues
12. Marks
13. MarkHistograms
14. Lessons
15. Homeworks
16. FinalMarks
17. EduGroups
18. Context
19. AverageMarks

Didnt made for: 
1. Works
2. WorkTypes * Useless
3. UserWall * Useless
4. UserGroups * Useless
5. UserRelatives * Useless
6. Timetables
7. Teacher
8. Tasks
9. SocialNetworks * Useless
10. SocialGroups * Useless
11. SocialEvents * Useless
12. Sferum * Useless
13. SchoolRating
14. Region * Useless
15. PersonSchedules * Useless
16. LessonLogStatuses
17. LessonLog
18. HomeworkTests * Useless
19. Friends
20. Files
21. EsiaAuthorization * Useless
22. EducationMembership
23. CriteriaJournalMarks
24. Classmates
25. Children
26. Authorizations
27. Authorities
*/

/* TODO:
Requests made for:

1. Auth
2. Thematic marks
3. Userfeeds
4. Users
 */
