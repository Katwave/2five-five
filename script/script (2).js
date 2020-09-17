const time = document.getElementById("time");
const miliSecs = document.getElementById("miliSecs");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

let minutes = 00;
let seconds = 00;
let miliseconds = 00;

function mins () {
    minutes++;
    time.innerHTML = `${minutes}:${seconds}`;
}
function secs () {
    seconds++;
    time.innerHTML = `${minutes}:${seconds}`
    if(seconds==60){
        seconds = 0;
        seconds++;
    }
}

function mili () {
    miliseconds++;
    time.innerHTML = `${minutes} : ${seconds}`
    miliSecs.innerHTML = ` . ${miliseconds}`
    if(miliseconds==100){
        miliseconds = 0;
        miliseconds++;
    }
}

start.addEventListener("click", () =>{

    mn = setInterval(mins, 60000);
    sc  = setInterval(secs, 1000);
    mlsc = setInterval(mili, 10);

});

pause.addEventListener("click", () =>{

    clearInterval(mn)
    clearInterval(sc)
    clearInterval(mlsc)

});

stop.addEventListener("click", () =>{

    seconds = 0;
    minutes = 0;
    miliseconds = 0;

    time.innerHTML = `0 : 0`;
    miliSecs.innerHTML = `.0`;

    clearInterval(mn)
    clearInterval(sc)
    clearInterval(mlsc)
});

