const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');
const btnStop = document.getElementById('stop');
const counter = document.getElementById('counter');

let cron = Number();
let timer;
let speed = 100;

function getTime(seconds){

    let getNewTime = new Date(seconds * 1000);
    return getNewTime.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function createTime(){

    timer = setInterval(function(){
        cron++;
        counter.innerHTML = getTime(cron);
    }, speed)
}

btnStart.addEventListener('click', function(){

    createTime();
    btnStart.disabled = true;
});

btnPause.addEventListener('click', function(){

    clearInterval(timer);
    btnStart.disabled = false;
});

btnStop.addEventListener('click', function(){

    clearInterval(timer);
    counter.innerHTML = "00:00:00";
    cron = 0;
    btnStart.disabled = false;
});