export function getTimestampOfWeekDay(currentTimestamp: Date, weekDName: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday") {
	let currentDate = currentTimestamp;
	let daysArr = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
	let firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
	let dayOfWeek = firstDayOfWeek + daysArr.findIndex((val) => val == weekDName) + 1;
	let DOWTimestamp = new Date(`${currentDate.getMonth() + 1}/${dayOfWeek}/${currentDate.getFullYear()}`).getTime();
	return DOWTimestamp;
}
