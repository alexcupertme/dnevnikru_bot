export function unixTimestampConverter(time: number): string {
	let a = new Date(time);
	let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	let year = a.getFullYear();
	let month = months[a.getMonth()];
	let date = a.getDate();
	// let hour = a.getHours();
	// let min = a.getMinutes();
	// let sec = a.getSeconds();
	let timeStr = `${date}-${month}-${year}`;
	return timeStr;
}
