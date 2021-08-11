const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// console.log(document.getElementById("cuongdeptrai"))
// console.log(document.getElementsByClassName("title"))

const newYears = "1 Jan 2022";

console.log('sdsd');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSecond = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) %24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
    console.log(days, hours, mins, seconds);   

    daysEl.innerHTML  = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000)