// import { Got } from "got";

// type TSubMark = {
// 	value: string;
// 	mood: string;
// };

// type TMarkElement = {
// 	date: string;
// 	lessonDate: string;
// 	subject: string;
// 	markType: string;
// 	shortMarkType: string;
// 	subMarks: Array<TSubMark>;
// 	period: string;
// };

// class Marks {
// 	private _session: Got;

// 	constructor(session: Got) {
// 		this._session = session;
// 	}

// 	private _parseData(html: string) {
// 		html = html.split("window.__USER__START__PAGE__INITIAL__STATE__ =")[1];
// 		html = html.split("window.__TALK__INITIAL__STATE__ =")[0];
// 		html = html.substring(0, html.length - 7);
// 		return JSON.parse(html);
// 	}

// 	public async getLatestMarks() {
// 		let html = await this._session.get(constants.baseUrl + "userfeed");
// 		const data = this._parseData(html.body);
// 		let marks = data.userMarks.children[0].marks;

// 		let formattedMarks: TMarkElement[] = [];
// 		marks.forEach((markElement: any) => {
// 			let formattedMark: TMarkElement;
// 			formattedMark = {
// 				date: markElement.date,
// 				lessonDate: markElement.lessonDate,
// 				markType: markElement.markTypeText,
// 				shortMarkType: markElement.shortMarkTypeText,
// 				subject: markElement.subject.name,
// 				period: markElement.periodId,
// 				subMarks: markElement.marks,
// 			};
// 			formattedMarks.push(formattedMark);
// 		});
// 		console.log(formattedMarks);
// 	}
// }

// export = Marks;
