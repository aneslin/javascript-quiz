var timerEl = document. getElementById("time");
var question = document.createElement("h3");
var answer1Ul = document.createElement("ul");
let timeleft;
var iQ = 0
var score
//create loop for array of choices

var questionMainEl = document.getElementById("greeting-box");
let questionSection = document.getElementById("question-section");


const questionArray = [
 question1 =  {"question": "who is the best dog?", 
    "choices":[
         "barnaby",
        "Beau",
         "Willaby"
    ],
    "correct": "barnaby"
},
question2 ={"question": "what is the best toy?",
"choices": [
  "sock",
  "banana",
  "What I am not supposed to have"
],
"correct": "What I am not supposed to have"
}]

//hide sections from the user
function hideSection(elementId){
    var visibleElement = document.getElementById(elementId);
    visibleElement.classList.add("hide")
}
//display sections to the user
function showSections(elementId){
    var visibleElement = document.getElementById(elementId);
    visibleElement.classList.remove("hide")
}
//counter function
function count(){
    timeleft=30
    var time = setInterval(function(){
      timerEl.textContent = timeleft;
        if (timeleft <= 0){
        clearInterval(time)

} 
else {
    timeleft --}
  },1000);
} ;

function questionMaker(question){
  var questionWrapper = document.createElement("div")
  var questionText = document.createElement("h2")
  questionText.textContent = question.question
  questionWrapper.appendChild(questionText)
  var answerBlockEl = document.createElement("ul")
  for(i = 0; i < question.choices.length; i ++){
    var listItemEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.elementId= "answer-" + i;
    console.log(question.choices[i])
    buttonEl.textContent=question.choices[i]
    listItemEl.appendChild(buttonEl)
    answerBlockEl.appendChild(listItemEl)
  }
  questionWrapper.appendChild(answerBlockEl)
  return questionWrapper
}


 var start = function  (){
    hideSection("greeting-box");
    showSections("question-section")
  count();
  var questionEl = document.getElementById("question-section")
  questionEl.appendChild(questionMaker(questionArray[iQ]))
 
 
 }
    

  //create li and button 

  //event listerner on button. if button === {"correct"} index +1, else timer -10 AND index +1 
document.getElementById("startBtn").addEventListener("click", start)
