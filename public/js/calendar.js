var date = moment();
const today = document.querySelector('#day-today');

const body = document.querySelector("body");
body.style.height = `${screen.height}px`; 

const start_date = date
    .startOf("isoweek")
    .format("MMMM Do");

const end_Date = date
  .startOf("isoweek")
  .add("days", 6)
  .format("MMMM Do");

today.innerHTML = `${start_date} - ${end_Date}`;