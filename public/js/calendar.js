var date = moment();

const body = document.querySelector("body");
body.style.height = `${screen.height}px`; 


/** FINDING OUT RANGES FOR WEEK **/ 

const today = document.querySelector('#day-today');

const start_date = date.startOf("isoweek").format("MM/D");

const end_Date = date
  .startOf("isoweek")
  .add("days", 6)
  .format("MM/D");

today.innerHTML = `${start_date} - ${end_Date}`;

/** FINDING OUT RANGES FOR WEEK **/

/** IPUTTING DATES INDIVIDUALLY **/

const weekdays = document.querySelectorAll("#weekday");

const weekdays_moment = [];

function weekday_start_date(day = 0) {
    return date.startOf("isoweek").add("days", day).format("MM/D");
}

for (let i = 0; weekdays_moment[weekdays_moment.length - 1] !== end_Date; i++) {
    weekdays_moment.push(weekday_start_date(i));
}

weekdays.forEach((day, i) => {
    console.log(day.innerHTML);
    day.innerHTML = weekdays_moment[i];
})

/** IPUTTING DATES INDIVIDUALLY **/


/** DISPLAYING WHAT DAY TODAY IS*/

weekdays.forEach((day, i) => {
    if (day.innerHTML === `${moment().format("MM/D")}`) {
        day.parentNode.parentNode.style.backgroundColor = "rgb(132, 132, 132)";
    } 
});

/** DISPLAYING WHAT DAY TODAY IS*/