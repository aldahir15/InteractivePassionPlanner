var date = moment();

const body = document.querySelector("body");
body.style.height = `${screen.height}px`; 


/** FINDING OUT RANGES FOR WEEK **/ 

const today = document.querySelector('#day-today');

const start_date = date
    .startOf("isoweek")
    .format("MMMM Do");

const end_Date = date
  .startOf("isoweek")
  .add("days", 6)
  .format("MMMM Do");

today.innerHTML = `${start_date} - ${end_Date}`;

/** FINDING OUT RANGES FOR WEEK **/

/** IPUTTING DATES INDIVIDUALLY **/

const weekdays = document.querySelectorAll("#weekday");

const weekdays_moment = [];

function weekday_start_date(day = 0) {
    return date.startOf("isoweek").add("days", day).format("MMMM Do");
}

for (let i = 0; weekdays_moment[weekdays_moment.length - 1] !== end_Date; i++) {
    weekdays_moment.push(weekday_start_date(i));
}

weekdays.forEach((day, i) => {
    day.innerHTML = weekdays_moment[i];
})

/** IPUTTING DATES INDIVIDUALLY **/


/** DISPLAYING WHAT DAY TODAY IS*/

weekdays.forEach((day, i) => {
    if (day.innerHTML === `${moment().format("MMMM Do")}`) {
        day.parentNode.style.backgroundColor = "#d3d3d3";
    } 
});

/** DISPLAYING WHAT DAY TODAY IS*/