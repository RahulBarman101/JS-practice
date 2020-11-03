var red = document.getElementById('red');
var blue = document.getElementById('blue');
var black = document.getElementById('black');
var purple = document.getElementById('pink');
var pink = document.getElementById('purple');

var img = document.getElementById('display-image');

var content = document.getElementById('content');

var hr = document.getElementById('hr');
var time = document.getElementById('time');
// var heartRate = document.getElementById('heart-rate');
// var hrimg = document.getElementById('hr-image');

red.addEventListener('click', () => {
    img.src = './images/red.png';
})

blue.addEventListener('click', () => {
    img.src = './images/blue.png';
})

black.addEventListener('click', () => {
    img.src = './images/black.png';
})

pink.addEventListener('click', () => {
    img.src = './images/pink.png';
})

purple.addEventListener('click', () => {
    img.src = './images/purple.png';
})

var x = setInterval(function() {
    var datetime = new Date();
    var hours = formatt(datetime.getHours());
    var minutes = formatt(datetime.getMinutes());
    var seconds = formatt(datetime.getSeconds());
    content.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000)

function formatt(t) {
    t = parseInt(t);
    if (t < 10) {
        return '0' + t;
    } else {
        return t
    }
}

function curT(stop = false) {
    x = setInterval(function() {
        var datetime = new Date();
        var hours = formatt(datetime.getHours());
        var minutes = formatt(datetime.getMinutes());
        var seconds = formatt(datetime.getSeconds());
        content.innerHTML = hours + ':' + minutes + ':' + seconds;
    }, 1000)
}

time.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    curT();
})

hr.addEventListener('click', () => {
    clearInterval(x);
    // hrimg.src = "./images/Capture.PNG";
    content.innerHTML = '';
    var heartRate = document.createElement('span');
    var hr_img = document.createElement('img');
    hr_img.src = './images/Capture.PNG';
    hr_img.classList.add('hr-img')
    heartRate.innerHTML = 78;
    heartRate.style.marginTop = '10rem;'
    heartRate.classList.add('heart-rate')
    content.appendChild(heartRate);
    content.appendChild(hr_img);
})