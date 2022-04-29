const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');
const btnStop = document.getElementById('stop');
const btnSteps = document.getElementById('steps');
const btnDeleteAll = document.getElementById('deleteAll');
const counter = document.getElementById('counter');
const divCounter = document.querySelector('.divStep');
const pTest = document.querySelector('.pTest');

let timer;
let speed = 100;

let hh = 0;
let mm = 0;
let ss = 0;

let clickTet = 0;

btnPause.disabled = true;


btnDeleteAll.onclick = () =>{

    document.location.reload();
};

function test(){

    ss++;

    if(ss > 60){
        ss = 0;
        mm++;

        if(mm > 60){

            mm = 0;
            hh++;
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + `:` + (mm < 10 ? '0' + mm : mm) + `:` + (ss < 10 ? '0' + ss : ss);

    counter.innerHTML = format;
}

function createTime(){

    timer = setInterval( test , speed);       
}


btnSteps.addEventListener('click', function(){
    
    clickTet++;

    console.log(clickTet);

    if(clickTet >= 5){
        btnSteps.disabled = true;
        clickTet = 5;
    }

    let addP1 = document.createElement('p');
    addP1.innerHTML = `${hh} : ${mm} : ${ss}`;
    addP1.id = "pTest";

    divCounter.appendChild(addP1);

    let btn = document.createElement('button');
    btn.id = "btnTest";
    btn.innerHTML = `<i class="fa-solid fa-delete-left" id="delBtn"></i>`;

    divCounter.appendChild(btn);

    btn.onclick = () => {
        addP1.remove();
        btn.remove();
        btnSteps.disabled = false;
        clickTet-= 1;
    };

});

btnStart.addEventListener('click', function(){
    createTime();
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStart.style.backgroundColor = "rgb(203, 107, 107)";

    counter.style.color = "white";
    counter.style.transform = "Scale(1)";
});

btnPause.addEventListener('click', function(){

    clearInterval(timer);
    btnStart.disabled = false;
    btnSteps.disabled = false;
    btnStart.style.backgroundColor = "rgb(255, 71, 71)";
    counter.style.color = "rgb(255, 71, 71)";
    counter.style.transition = "0.5s";
    counter.style.transform = "Scale(1.2)";
});

btnStop.addEventListener('click', function(){

    clearInterval(timer);
    counter.innerHTML = "00:00:00";
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnSteps.disabled = false;
    btnStart.style.backgroundColor = "rgb(255, 71, 71)";
    counter.style.color = "white";
    counter.style.transform = "Scale(1)";
    hh = 0;
    mm = 0;
    ss = 0;
});