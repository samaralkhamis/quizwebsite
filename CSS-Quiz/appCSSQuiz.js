
'use strict';
let Questions= document.getElementById("questions");
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answerFour=document.getElementById("answer4");
let questionnum=document.getElementById("quisnum");
let AnswersDiv=document.getElementById('AnswersDiv');
let XQuestion=0;
let correctAnswers=[1,3,3,3,4,2,2,1,4,1];
let QuizContainer=document.getElementById("QuizContainer");
let nxtBtn=document.getElementById('nxtBtn');
let correctAnswerCount=0;
let ChoosenAnswer=0;
let userQuizAnswers=[];
let x=[];

let jsQuiz = [{
    questions: "Which HTML tag is used to define an internal style sheet?",
    choices: ["style", "css", "script", "link"],
    correctAnswer:"style&g",
    questionnumber:"1 of 10"
}, {
    questions: "Which HTML attribute is used to define inline styles??",
    choices: ["class", "font", "style", "styles"],
    correctAnswer:"style",
    questionnumber:"2 of 10"
}, {
    questions: "Which property is used to change the background color?",
    choices: ["bgcolor", "color", "backgruond-color", "colorback"],
    correctAnswer:"backgruond-color",
    questionnumber:"3 of 10"
}, {
    questions: "Which CSS property is used to change the text color of an element?:",
    choices: ["fgcolor", "text-color", "color", "font-color"],
    correctAnswer:"color",
    questionnumber:"4 of 10"
}, {
    questions: "Which CSS property controls the text size?",
    choices: ["font-style", "text-size", "text-style", "font-size"],
    correctAnswer:"font-size",
    questionnumber:"5 of 10"
}, {
    questions: "Which property is used to change the font of an element?",
    choices: ["font-style", "font-family", "font-weight","font-color"],
    correctAnswer:"font-family",
    questionnumber:"6 Of 10"
}, {
    questions: "Which property is used to change the left margin of an element?",
    choices: ["margin-left", "padding-left", "indent", "flot-left"],
    correctAnswer:"margin-left",
    questionnumber:"7 of 10"
}, {
    questions: "How do you select an element with id 'demo'?",
    choices: ["#demo", "*demo", ".demo","demo"],
    correctAnswer:"#demo",
    questionnumber:"8 of 10"
}, {
    questions: "How do you select elements with class name 'test'?",
    choices: ["#test", "test", "*test", ".test"],
    correctAnswer:".test",
    questionnumber:"9 of 10"
}, {
    questions: "How do you select all p elements inside a div element?",
    choices: ["div p", "div+p", "div.p", "p"],
    orrectAnswer:"div p",
    questionnumber:"10 of 10"
}];

/*To start the quize */
intitalization();

function intitalization(){
quizBeginning();
    AnswersDiv.addEventListener('click',function(event){
    let buttonClicked=event.target;
  checkAnswer(buttonClicked.innerText);
   
})  
}

/*To start the quiz */
function quizBeginning(){
    questionText(jsQuiz[0]);
}

function checkAnswer(userAnswers){
    if(userAnswers == jsQuiz[XQuestion].correctAnswer){ //To check the correct answer by comparing it with the answer in the jsQuiz array
        correctAnswerCount=correctAnswerCount+1; // calculate the correct answers
        console.log('the counter is:', correctAnswerCount);
    }

    //getUserAnswers();
   // console.log('the cgossed anser is',getUserAnswers());
    showNextQuestion();
    return correctAnswerCount;
    
}
console.log('hi'+correctAnswerCount);
function showNextQuestion(){
    if(XQuestion==jsQuiz.length-1){
        nxtBtn.style.display='block'; // to show the next button that will take me to result page
        nxtBtn.href="./reuslt css/indexResult.html";
    }
    else{
        XQuestion++;
       questionText(jsQuiz[XQuestion]);
       //To bring the question and its answers
    }
    LocalStorageFrom();
}
function questionText(question){//To bring the question and its answers
Questions.innerHTML=question.questions;
questionnum.innerHTML=question.questionnumber;
answerOne.innerHTML=question.choices[0];
answerTwo.innerHTML=question.choices[1];
answerThree.innerHTML=question.choices[2];
answerFour.innerHTML=question.choices[3];
}

/*To store the anserws values */
answerOne.addEventListener('click',function(e){
   ChoosenAnswer=1;
   //console.log(ChoosenAnswer);
   console.log(userQuizAnswers);
    userQuizAnswers.push(1);
   console.log(userQuizAnswers);

})
answerTwo.addEventListener('click',function(e){
    ChoosenAnswer=2;
   
    userQuizAnswers.push(2);
 })
 answerThree.addEventListener('click',function(e){
    ChoosenAnswer=3;
  userQuizAnswers.push(3);
 })
 answerFour.addEventListener('click',function(e){
    ChoosenAnswer=4;
   
    userQuizAnswers.push(4);
 })
console.log(userQuizAnswers);
console.log('the answers', correctAnswerCount);

/*Local storage */
function LocalStorageFrom(){
    console.log(correctAnswerCount);
    let array=JSON.stringify(correctAnswerCount);
    localStorage.setItem('userAnswersCSS',array);
    let array2=JSON.stringify(userQuizAnswers);
    localStorage.setItem('userQuizAnswersCSS',array2)

}

function startTimer(duration, view_date) {
    let countdown = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(countdown / 60, 10);
        seconds = parseInt(countdown % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        view_date.textContent = minutes + ":" + seconds;

        if (--countdown < 0) {
            location.href='../../result.html';
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};