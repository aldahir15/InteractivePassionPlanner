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

/** PUTTING DATES INDIVIDUALLY **/

const weekdays = document.querySelectorAll("#weekday");

const weekdays_moment = [];

function weekday_start_date(day = 0) {
    return date.startOf("isoweek").add("days", day).format("MM/D");
}

for (let i = 0; weekdays_moment[weekdays_moment.length - 1] !== end_Date; i++) {
    weekdays_moment.push(weekday_start_date(i));
}

weekdays.forEach((day, i) => {
    day.innerHTML = weekdays_moment[i];
})

/** PUTTING DATES INDIVIDUALLY **/



/** DISPLAYING EACH INDIVIDUAL HOUR*/

const DAYTIME = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", " 9:30", 
"10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", 
"3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", 
"8:00", "8:30", "9:00", "9:30", "10:00", "10:30"];

weekdays.forEach((day, i) => {
    let hour_container = day.parentNode.parentNode.querySelector("#hour-container-list");
    DAYTIME.forEach((x) => {
        const newNode = document.createElement("LI");
        const newPNode = document.createElement("P");
        const textNode = document.createTextNode(x);
        const textAreaNode = document.createElement("TEXTAREA");
        newPNode.appendChild(textNode);
        newNode.appendChild(newPNode);
        newNode.appendChild(textAreaNode);
        if (x === "12:00") {
            newNode.style.backgroundColor = "#f2f3f4";
            textAreaNode.style.backgroundColor = "#f2f3f4";
        }
        hour_container.appendChild(newNode); 
    })
});

/** DISPLAYING EACH INDIVIDUAL HOUR*/


/** DISPLAYING WHAT DAY TODAY IS*/

weekdays.forEach((day, i) => {
    if (day.innerHTML === `${moment().format("MM/D")}`) {
        // day.parentNode.parentNode.style.backgroundColor = "rgb(132, 132, 132)";
        let hour_container = day.parentNode.parentNode.querySelector("#hour-container-list");
        hour_container.style.backgroundColor = "#ececec";
        let textAreaNodes = hour_container.querySelectorAll('textarea');
        textAreaNodes.forEach((node) => {
        if (node.previousSibling.innerHTML !== "12:00") {
            node.style.backgroundColor = "#ececec"
        }
        });
    } 
});

/** DISPLAYING WHAT DAY TODAY IS*/