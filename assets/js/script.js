var timeCounter = 10;
var answerEl = document.querySelector("#answer-content")

function question1() {
    var buttonEl = document.querySelector("#answer-1");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-2");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-3");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-4");
    console.log(buttonEl)
    
};
question1();

function question2() {
    var buttonEl = document.querySelector("#answer-5");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-6");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-7");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-8");
    console.log(buttonEl)
}
question2;

function question3() {
    var buttonEl = document.querySelector("#answer-9");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-10");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-11");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-12");
    console.log(buttonEl)
}

function question4() {
    var buttonEl = document.querySelector("#answer-13");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-14");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-15");
    console.log(buttonEl)
    var buttonEl = document.querySelector("#answer-16");
    console.log(buttonEl)
}

function question5() {
    var buttonEl = document.querySelector("#answer-17");
console.log(buttonEl)
var buttonEl = document.querySelector("#answer-18");
console.log(buttonEl)
var buttonEl = document.querySelector("#answer-19");
console.log(buttonEl)
var buttonEl = document.querySelector("#answer-20");
console.log(buttonEl)
}


/* Button objects begin */
var buttonEl = document.querySelector("#clock");
console.log(buttonEl);

/* Button objects end */

/* Event Listener Begins */
var buttonEl = document.querySelector("#clock");
var btnEl = document.querySelector("timer");

buttonEl.addEventListener("click", function() {
    var answerEl = document.createElement("button");
    answerEl.className = "timer";
    console.log("timer has been clicked")
});

var answerButtonHandler = function(event) {
    console.log(event.target);
}

answerEl.addEventListener("click", answerButtonHandler);

/* Event Listener Ends */

/* On Click*/
//var counter = 5
////function countdown() {
  //  document.getElementById("clock").innerHTML
//console.log(counter);
//counter--;
//if (counter === 0) {
  //  clearInterval(startCountdown);
//console.log("time up");
//};
//};

//var lapseEl = document.getElementById('countdown');
//var
//var

//function countdown() {

//var timeLapse = 10;

//var timeInterval = setInterval(function() {
//if (timeLapse > 1) {
//lapseEl.textContent = timeLapse + ' minute(s) remining';
//timeLeft--;
//}
//else {
    //lapseEl.textContent = '';
    //clearInterval(timeInterval);
//}

//}, 1000);
//};

//var startCountdown = setInterval(countdown, 1000);
