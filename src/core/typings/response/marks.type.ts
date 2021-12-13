export type TThematicMark = {
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

export type TLessonHistogram = {
	markNumbers: {
		markNumber: number;
		marks: {
			value: string;
			count: number;
		}[];
	}[];
};

export type TClassmatesHistogram = {
	works: {
		workId: number;
		workId_str: string;
		markNumbers: {
			markNumber: number;
			marks: {
				value: string;
				count: number;
			}[];
		}[];
	}[];
};

export type TRecentMarks = {
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
	criteriabasedmarks: {
		id: number;
		id_str: string;
		personid: number;
		section: number;
		value: number;
		date: string;
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
	lessonLogEntries: {
		person: number;
		lesson: number;
		person_str: string;
		lesson_str: string;
		comment: string;
		status: string;
		createdDate: string;
	}[];
};

export type TMarkTypes = {
	markna: string[];
	markdismiss: string[];
	mark5: string[];
	mark6: string[];
	mark10: string[];
	mark100: string[];
	markabcdf: string[];
	mark12: string[];
	mark7: string[];
	test: string[];
	markoral6band: string[];
	notset: string[];
};

export type TFinalMarks = {
	person: number;
	person_str: string;
	group: number;
	group_str: string;
	reportingPeriod: number;
	reportingPeriod_str: string;
	"per-subject-final-marks": {
		subject: number;
		subject_str: string;
		"final-mark": {
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
}[];

export type TWeightedMarks = {
	subjectMarks: {
		subject: number;
		subject_str: string;
		marks: {
			person: number;
			value: number;
		}[];
	}[];
};

export type TAvgGroupMark = {
	group: number;
	group_str: string;
	reportingPeriod: number;
	reportingPeriod_str: string;
	person: number;
	person_str: string;
	"per-subject-averages": {
		subject: number;
		subject_str: string;
		"avg-mark-value": string;
	}[];
};
