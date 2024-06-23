// Proble: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem

function timeConversion(s) {

	const [hours, minutes, partialSeconds] = s.split(":");
	const amPm = partialSeconds.slice(-2);
	const seconds = partialSeconds.slice(0,2)

	let parsedHours = parseInt(hours, 10);
	console.log(hours, parsedHours)

	if(amPm === "PM" && parsedHours !== 12) {
		parsedHours += 12;
	} else if (amPm === "AM" && parsedHours === 12) {
		parsedHours = 0;
	}

	return `${parsedHours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}


const time = timeConversion('05:05:07PM');
console.log(time)
