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
        
        if(cron >= 10){
           
            let addP1 = document.createElement('p');
            addP1.innerHTML = "Deu certo";
            addP1.id = "pTest";

            counter.appendChild(addP1);

            if(cron >= 100  ){

                let addP2 = document.createElement('p');
            addP2.innerHTML = "Deu certooo";
            addP2.id = "pTest";
            
            addP1.remove();
            counter.appendChild(addP2);
            }

        }

    }, speed)
}


btnStart.addEventListener('click', function(){

    createTime();
    btnStart.disabled = true;
    btnStart.style.backgroundColor = "rgb(203, 107, 107)";

    counter.style.color = "white";
    counter.style.transform = "Scale(1)";
});

btnPause.addEventListener('click', function(){

    clearInterval(timer);
    btnStart.disabled = false;
    btnStart.style.backgroundColor = "rgb(255, 71, 71)";

    counter.style.color = "red";
    counter.style.transition = "0.5s";
    counter.style.transform = "Scale(1.2)";
});

btnStop.addEventListener('click', function(){

    clearInterval(timer);
    counter.innerHTML = "00:00:00";
    cron = 0;
    btnStart.disabled = false;
    btnStart.style.backgroundColor = "rgb(255, 71, 71)";

    counter.style.color = "white";
    counter.style.transform = "Scale(1)";
});