var timerEl = document. getElementById("time");
var question = document.createElement("h3");
var answer1Ul = document.createElement("ul");
let timeleft;
var iQ = 0
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
        if (timeleft===0){
        clearInterval(time)
  //call score page
} 
//or if question array i = questionArray length
else {
    timeleft --}
  },1000);
} ;

function answerMaker(question){
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
  return answerBlockEl
}



 var start = function  (){
    hideSection("greeting-box");
    showSections("question-section")
  count();
  var questionEl = document.getElementById("question-section")
  
  
  
  function quiz(){
    var questionWrapperEl = document.createElement("div")
    questionWrapperEl.elementId = "question-wrapper"
    questionEl.appendChild(questionWrapperEl)
    var questionTextEl = document.createElement("h3")
    console.log(questionArray[iQ].question)
    questionTextEl.textContent = questionArray[iQ].question
    questionWrapperEl.appendChild(questionTextEl)
    questionWrapperEl.appendChild(answerMaker(questionArray[iQ]))
    document.getElementById("question-section").addEventListener("click", function(answerChoice){
      if (answerChoice.target.textContent != questionArray[iQ].correct){
        timeleft = timeleft - 10

      document.getElementById("question-section").replaceChildren([''])
      iQ++
      console.log(iQ)
      quiz()
      }
     
    })
  }
  quiz()
}

  //create li and button 

  //event listerner on button. if button === {"correct"} index +1, else timer -10 AND index +1 
document.getElementById("startBtn").addEventListener("click", start)
