const clockDateDisplay = document.getElementById("clock-date");
const clockTimeDisplay = document.getElementById("clock-time");


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

clockDateDisplay.innerHTML = date+' '+time;

// currentDateTime = new Date();
// currentTime = currentDateTime.getTime();

// clockTimeDisplay.innerHTML = `${currentTime}`;


// clockDateDisplay.innerHTML = "Today";
// clockTimeDisplay.innerHTML = "Now";