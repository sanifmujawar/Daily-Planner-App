//Variables declaration
let $currentDayEl = $("#currentDay");
$currentDayEl.text(moment().format("dddd, MMMM Do"));
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
let currentHour = parseInt(moment().format("h"));

// Event listener onClick to save and set the Local Storage item
$("button").on("click", (event) => {
    let key = $(event.target).attr("data-hour");
    let value = $(event.target).siblings("textarea").val();
    localStorage.setItem(key, value);
  });  