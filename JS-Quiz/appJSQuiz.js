
'use strict';
let Questions= document.getElementById("questions");
let answerOne= document.getElementById("answer1");
let answerTwo= document.getElementById("answer2");
let answerThree= document.getElementById("answer3");
let answerFour=document.getElementById("answer4");
let questionnum=document.getElementById("quisnum");
let AnswersDiv=document.getElementById('AnswersDiv');
let XQuestion=0;
let correctAnswers=[3,4,1,2,1,3,4,1,1,2];
let QuizContainer=document.getElementById("QuizContainer");
let nxtBtn=document.getElementById('nxtBtn');
let correctAnswerCount=0;
let ChoosenAnswer=0;
let userQuizAnswers=[];
let x=[];

let jsQuiz = [{ 
    questions: "Inside which HTML element do we put the JavaScript?",
    choices: ["js","javascript", "script", "scripting"],
    correctAnswer:"script",
    questionnumber:"1 of 10"
}, {
    questions: "what is the data types of variable in JS?",
    choices: ["ALL OF ABOVE", " NUMBER", " STRING", "BOOLEN"],
    correctAnswer:"ALL OF ABOVE",
    questionnumber:"2 of 10"
}, {
    questions: "What is the correct HTML element for inserting a line break?",
    choices: ["if (i!=5)", "if i =! 5 then", "if (i5)", "if i5"],
    correctAnswer:"if (i!=5)",
    questionnumber:"3 of 10"
}, {
    questions: "How do you find the number with the highest value of x and y?",
    choices: ["ceil(x,y)", "Math.max(x,y)", "Math.ceil(x.y)", "top(x.y)"],
    correctAnswer:"Math.max(x,y)",
    questionnumber:"4 of 10"
}, {
    questions: "Which operator is used to assign a value to a variable?",
    choices: ["=", "*", "x", "-"],
    correctAnswer:"=",
    questionnumber:"5 of 10"
}, {
    questions: "What will the following code return: Boolean(10 > 9)",
    choices: ["false", "true", "NaN", "UNknow"],
    correctAnswer:"true",
    questionnumber:"6 Of 10"
}, {
    questions: " Which built-in method reverses the order of the elements of an array?",
    choices: ["changeOrder(order)", "None of the above.", "sort(order)", " reverse()"],
    correctAnswer:"reverse()",
    questionnumber:"7 of 10"
}, {
    questions: " Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["concat()", "append()", "merge()", " add()"],
    correctAnswer:"concat()",
    questionnumber:"8 of 10"
}, {
    questions: "Javascript is an _______ language?",
    choices: ["Object-Oriented", "alt", "longdesc", "title"],
    correctAnswer:"Object-Oriented",
    questionnumber:"9 of 10"
}, {
    questions: "How do we write a comment in JavaScript?",
    choices: ["+c/", "/* */", "$", "#"],
    orrectAnswer:"/* */",
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
        nxtBtn.href="./Result/indexResult.html";
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
    localStorage.setItem('userAnswersjs',array);
    let array2=JSON.stringify(userQuizAnswers);
    localStorage.setItem('userQuizAnswersjs',array2)

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
            location.href="./Result/indexResult.html";
        }
    }, 1000);
}

window.onload = function () {
   let minutesOfFive = 60 * 3,
        view_date = document.querySelector('#time');
    startTimer(minutesOfFive, view_date);
};