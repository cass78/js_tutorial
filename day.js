const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];

// returns the day of the week for the given date
function dayName(date){
	return daysOfTheWeek[date.getDay()];
}

//Returns a greeting for the given date
function greeting(date){
	
	return `Happy ${daysOfTheWeek[date.getDay()]}`;
}		