// Proble: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem

function timeConversion(s) {

	const [hours, minutes, partialSeconds] = s.split(":");
	const amPm = partialSeconds.slice(-2);
	const seconds = partialSeconds.slice(0,2)

	let parsedHours = parseInt(hours, 10);

	if(amPm === "PM" && parsedHours !== 12) {
		parsedHours += 12;
	} else if (amPm === "AM" && parsedHours === 12) {
		parsedHours = `00`;
	}

	return `${parsedHours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}


const time = timeConversion('04:59:59AM');
console.log(time)  // 04:59:59
