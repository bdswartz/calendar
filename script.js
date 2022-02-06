var dayOfWeek = [
    "Sun", 
    "Mon", 
    "Tues", 
    "Wed", 
    "Thurs", 
    "Fri", 
    "Sat"
];
var monthOfYear = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

apiStatUrl = "https://history.openweathermap.org/data/2.5/aggregated/year?lat=" + Lat +m "&lon=" + Long + "&appid=" + apiKey;

var buildCalendar = function () {
    for (var w = 0; w < 6; w++) {
        var weekContainerEl = document.createElement("div");
        var calendarContainerEl = document.querySelector(".calendar-container");
        weekContainerEl.className = "week-row";
        weekContainerEl.dataset.weekNum = w;
        console.log(weekContainerEl);
        console.log(calendarContainerEl);
        calendarContainerEl.appendChild(weekContainerEl);

        for (var d = 0; d < 7; d++) {
            var dayEl = document.createElement("div");
            dayEl.className = "day";
            dayEl.dataset.dayNum = d;
            var dayNumEl = document.createElement("div");
            dayNumEl.className = "day-number";
            var dayNum = ((w*7)+d);
            dayNumEl.textContent = dayNum;
            dayEl.appendChild(dayNumEl);
            weekContainerEl.appendChild(dayEl);
        }
    }
};
buildCalendar();