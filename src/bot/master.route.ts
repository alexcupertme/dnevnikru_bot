import { averageMeFunction, averageUserFunction, menuRoute, classmatesCommand, helpRoute, meCommand, startCommand, todayHomeworkCommand, todayScheduleCommand, userCommand } from ".";
import { aboutRoute } from "./about/about.route";

export class MasterRoute {
	constructor() {
		helpRoute();
		todayHomeworkCommand();
		todayScheduleCommand();
		meCommand();
		userCommand();
		classmatesCommand();
		startCommand();
		averageMeFunction();
		averageUserFunction();
		menuRoute();
		aboutRoute();
	}
}
