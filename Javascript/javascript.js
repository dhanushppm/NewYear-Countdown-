const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#sec");

function refreshTime(){ 
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
const currentDate = new Date();
const diff = newYear - currentDate;
const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor((diff/1000/60/60)%24);
const m = Math.floor((diff/1000/60)%60);
const s = Math.floor((diff/1000)%60);

Days.innerHTML = d<10?"0"+d:d;
Hours.innerHTML = h<10?"0"+h:h;
Minutes.innerHTML = m<10?"0"+m:m;
Seconds.innerHTML = s<10?"0"+s:s;
}
setInterval(refreshTime,1000);