"use strict"
let score=document.getElementById('score');
let tableanswer=document.getElementById("table");
let correctAnswers=[1,3,3,3,4,2,2,1,4,1];
tableanswer.style.display="none";


function GetDataFromLocalStorage(){
    let myData=localStorage.getItem('userAnswersCSS');
    let myDataAnswers=localStorage.getItem('userQuizAnswersCSS'); 
    let parsemyData=JSON.parse(myData);
    console.log(parsemyData);
    let parsemyDataAnswers=JSON.parse(myDataAnswers);
    render(parsemyData,parsemyDataAnswers);
    PassOrFail(parsemyData);
}

GetDataFromLocalStorage();
PassOrFail(parsemyData);

function PassOrFail(parsemyData){
  console.log(parsemyData);
if(parsemyData >=5 ){
   document.getElementById("pass or failed").src = "http://static1.squarespace.com/static/5f28c184953ab91a0dc0daed/5f28c7469963cd5b03781978/60b01099529e5174cb3d8fac/1622151687646/PASS+Logo+Stacked+Full+Color+-+2000x2000.png?format=1500w";
   score.innerHTML= `your score is ${parsemyData}`;
  }
  else{
    document.getElementById("pass or failed").src = "https://freepikpsd.com/file/2019/10/fail-icon-png-8-Transparent-Images.png";
    score.innerHTML= ` your score is ${parsemyData}`;
  }
}
function render(parsemyData,parsemyDataAnswers){
    for (let i=0;i<correctAnswers.length;i++){
      let tablerow=document.createElement('tr');
      let tableData1=document.createElement('td');
      let tableData2=document.createElement('td');
      tableanswer.appendChild(tablerow);
      tablerow.appendChild(tableData1);
      tablerow.appendChild(tableData2);

        if(parsemyDataAnswers[i]==correctAnswers[i]){
            tableData1.innerHTML ="Question " + (i+1) +" : " ;
            tableData2.textContent ="correct answers";
            tableData2.style.color="green";
            tableData2.style.fontSize="27px";
            tableData2.style.textAlign="center";
            tableData1.style.color="green";
            tableData1.style.fontSize="30px";
            tableData1.style.textAlign="center";
            
        } else{
        tableData1.innerHTML = "Question " + (i+1) +" : ";
        tableData2.innerHTML ="wrong answer";
        tableData2.style.color="red";
        tableData2.style.fontSize="30px";
        tableData2.style.textAlign="center";
        tableData1.style.color="red";
        tableData1.style.fontSize="30px";
        tableData1.style.textAlign="center";


    }
    }}
        function myFunction() {
            var x = document.getElementById("table");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }