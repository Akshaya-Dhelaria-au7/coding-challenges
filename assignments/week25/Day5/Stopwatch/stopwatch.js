var hour = 0;
var minute = 0;
var second = 0;
var refresh;

function timer () {
    let divClass = document.getElementsByClassName('time')[0]
    clearInterval(refresh);
    refresh = setInterval(() => {
        second+=1
        if(second == 60){
            minute+=1
            second=0
        }

        if(minute == 60){
            hour+=1
            minute=0
        }
        var timer  = hour + ":" +  minute + ":" + second
        // console.log(timer)
        divClass.textContent = timer;
    }, 1000); 
}

function stopWatch(){
    clearInterval(refresh);
}


function resetWatch(){
    let hour=0
    let minute=0
    let second=0
    divClass = document.getElementsByClassName('time')[0]
    divClass.textContent = (hour + ":" + minute + ":" + second)
    clearInterval(refresh)
}
