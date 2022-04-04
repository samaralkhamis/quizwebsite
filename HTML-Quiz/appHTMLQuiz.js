'use strict';
let Questions= document.getElementById("questions");
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answerFour=document.getElementById("answer4");
let questionnum=document.getElementById("quisnum");
let AnswersDiv=document.getElementById('AnswersDiv');
let XQuestion=0;
let correctAnswers=[1,3,1,3,1,3,1,4,2,4];
let QuizContainer=document.getElementById("QuizContainer");
let nxtBtn=document.getElementById('nxtBtn');
let correctAnswerCount=0;
let ChoosenAnswer=0;
let userQuizAnswers=[];
let x=[];

let jsQuiz = [{
    questions: "What does Hyper Text Markup Language stand for?",
    choices: ["HTML", "CSS", "JS", "HML"],
    correctAnswer:"HTML",
    questionnumber:"1 of 10"
}, {
    questions: "Choose the correct HTML element for the largest heading?",
    choices: ["h6", "heading", "h1", "h3"],
    correctAnswer:"h1",
    questionnumber:"2 of 10"
}, {
    questions: "What is the correct HTML element for inserting a line break?",
    choices: ["br", "lb", "break", "enter"],
    correctAnswer:"br",
    questionnumber:"3 of 10"
}, {
    questions: "Choose the correct HTML element to define important text :",
    choices: ["b", "i", "important", "strong"],
    correctAnswer:"important",
    questionnumber:"4 of 10"
}, {
    questions: "Choose the correct HTML element to define emphasized text :",
    choices: ["i", "italic", "em", "p"],
    correctAnswer:"i",
    questionnumber:"5 of 10"
}, {
    questions: "Which character is used to indicate an end tag?",
    choices: ["-", "+", "/", "*"],
    correctAnswer:"/",
    questionnumber:"6 Of 10"
}, {
    questions: "How can you make a numbered list?",
    choices: ["ol", "list", "dl", "ul"],
    correctAnswer:"ol",
    questionnumber:"7 of 10"
}, {
    questions: "How can you make a bulleted list?",
    choices: ["ol", "dl", "list", "ul"],
    correctAnswer:"ul",
    questionnumber:"8 of 10"
}, {
    questions: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    choices: ["src", "alt", "longdesc", "title"],
    correctAnswer:"alt",
    questionnumber:"9 of 10"
}, {
    questions: "What is the correct HTML element for inserting a line break?",
    choices: ["section", "bottom", "footer", "br"],
    orrectAnswer:"br",
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
        nxtBtn.href="../HTML-Quiz/Result/indexResult.html";
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
    localStorage.setItem('userAnswers',array);
    let array2=JSON.stringify(userQuizAnswers);
    localStorage.setItem('userQuizAnswers',array2)

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
            location.href="../HTML-Quiz/Result/indexResult.html";
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};