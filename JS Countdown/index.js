var date_name = 'New Year';
var date = document.getElementById('date');
date.innerHTML = date_name;

const new_year_date = new Date('2021/01/01');

// console.log(days + ' ' + hours + ' ' + minutes + ' ' + seconds)

function formatTime(time) {
    if (time < 10) {
        return '0' + time
    } else {
        return '' + time
    }
}

var interval = setInterval(function() {
    var cur_date = new Date();

    var diffInMilli = Math.abs(new_year_date - cur_date) / 1000;

    // console.log(diffInMilli);

    var days = Math.floor(diffInMilli / 86400);
    days = formatTime(days)
        // console.log(days)
    var hours = Math.floor(diffInMilli / 3600) % 24;
    hours = formatTime(hours)
        // console.log(hours)
    var minutes = Math.floor(diffInMilli / 60) % 60;
    minutes = formatTime(minutes)
    var seconds = Math.floor(diffInMilli % 60)
    seconds = formatTime(seconds)
    var days_left = document.getElementById('days')
    days_left.innerHTML = days

    var hours_left = document.getElementById('hours')
    hours_left.innerHTML = hours

    var mins_left = document.getElementById('minutes')
    mins_left.innerHTML = minutes

    var secs_left = document.getElementById('seconds')
    secs_left.innerHTML = seconds

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval)
    }
}, 1000)

// console.log(new Date())