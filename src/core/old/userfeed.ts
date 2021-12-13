// import { AxiosInstance } from "axios";
// import { Got } from "got";
// import constants from "../constants";

// type TUserFeedData = {
// 	avatar: string;
// 	sex: string;
// 	type: string;
// 	name: string;
// 	roles: string;
// 	profileURL: string;
// 	userId: string;
// 	schoolName: string;
// 	schoolId: string;
// };

// class UserFeed {
// 	private _session: Got;
// 	private _userFeedData: TUserFeedData;

// 	constructor(session: Got) {
// 		this._session = session;
// 	}

// 	private _parseUserData(html: string) {
// 		html = html.split("window.__TALK__INITIAL__STATE__ =")[1];
// 		html = html.split(";")[0];
// 		const parsed = JSON.parse(html);
// 		const user = parsed.user;

// 		const data: TUserFeedData = {
// 			avatar: user.avatar,
// 			sex: user.sex,
// 			type: user.type,
// 			name: user.name,
// 			roles: user.roles,
// 			profileURL: user.profileUrl,
// 			userId: parsed.metrika.userId,
// 			schoolName: parsed.schoolsInfo[0].name,
// 			schoolId: parsed.schoolsInfo[0].id,
// 		};
// 		this._userFeedData = data;

// 		return data;
// 	}

// 	public async getUserData() {
// 		let html = await this._session.get(constants.baseUrl + "userfeed");

// 		console.log(html.body);
// 		return this._parseUserData(html.body);
// 	}
// }

// export = UserFeed;
