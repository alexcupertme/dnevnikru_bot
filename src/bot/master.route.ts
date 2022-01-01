import {
	averageMeFunction,
	averageUserFunction,
	menuRoute,
	classmatesCommand,
	helpRoute,
	meCommand,
	startCommand,
	todayHomeworkCommand,
	todayScheduleCommand,
	userCommand,
	authHandler,
	aboutRoute,
} from ".";

export class MasterRoute {
	constructor() {
		helpRoute();
		authHandler();
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
