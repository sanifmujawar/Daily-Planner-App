dayjs.extend(window.dayjs_plugin_advancedFormat);

// Variables declaration
let $currentDayEl = $("#currentDay");
const today = dayjs().format("dddd Do MMMM YYYY");  // Use dayjs() to get the current day
$currentDayEl.text(today);

let containerEl = $(".container");
let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let hoursDisplay = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
let currentHour = parseInt(dayjs().format("H"));
// console.log(currentHour);

// Loop to create the HTML for the business hours
for (let i = 0; i < hoursArray.length; i++) {
    const hour = hoursArray[i];
    const hourDisplay = hoursDisplay[i];
    let cssClass = "";
    if (hour > currentHour) {
      cssClass = "future";
    } else if (hour < currentHour) {
      cssClass = "past";
    } else {
      cssClass = "present";
    }
    let getLocalStorage = localStorage.getItem(hour) || ""; //get the Local Storage if already set
    let row = `<div class="row">
    <div class="col-2 time-block hour">${hourDisplay}</div>
    <textarea class="col-8 ${cssClass}">${getLocalStorage}</textarea>
    <button class="col-2 saveBtn" data-hour="${hour}">💾</button>
    </div>`;
    containerEl.append(row);
}

// Event listener onClick to save and set the Local Storage item
$("button").on("click", (event) => {
    let key = $(event.target).attr("data-hour");
    let value = $(event.target).siblings("textarea").val();
    localStorage.setItem(key, value);
});
