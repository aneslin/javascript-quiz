var timerEl = document.getElementById("time");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var initials = document.getElementById("initials")
var finalScore = document.getElementById("score")
let timeleft;
var score
var storage
var scoreStore
var time
//create loop for array of choices

var questionMainEl = document.getElementById("greeting-box");
let questionSection = document.getElementById("question-section");


const questionArray = [
  {"question": "who is the best dog?", 
    "choices":[
         "barnaby",
        "Beau",
         "Willaby"
    ],
    "correct": "barnaby"
},
{"question": "what is the best toy?",
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
    timeleft=3
    time = setInterval(function(){
      timerEl.textContent = timeleft;
        if (timeleft <= 0){
        end()
} 
else {
    timeleft --}
  },1000);
};

function questionMaker(question){
  var questionWrapper = document.createElement("div")
  var questionText = document.createElement("h2")
  questionText.textContent = question.question
  questionWrapper.appendChild(questionText)
  var answerBlockEl = document.createElement("ul")
  for(i = 0; i < question.choices.length; i ++){
    var listItemEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.textContent=question.choices[i]
    listItemEl.appendChild(buttonEl)
    answerBlockEl.appendChild(listItemEl)
  };
  questionWrapper.appendChild(answerBlockEl)
  return questionWrapper
}

function end(){
  score = timeleft
  clearInterval(time)
  hideSection("question-section")
  showSections("final-score")
  finalScore.textContent=score
  hideSection("time")
  document.getElementById("titleText").textContent= "Enter Your Score"

  document.getElementById("store").addEventListener("click", function(event){
    event.preventDefault()
    if (initials.value.length > 0){
      
      scoreStore = JSON.stringify({ "initials": initials.value, "Score" : score})
      localStorage.setItem("score", scoreStore)
    }
  })

  
}


 var start = function  (){
    hideSection("greeting-box");
    count();
    question1.appendChild(questionMaker(questionArray[0]))
    question2.appendChild(questionMaker(questionArray[1]))
    showSections("question-section")
    
    question1.addEventListener("click", function(event){
      console.log(event.target.tagName)
      if(event.target.tagName != "H2" && event.target.textContent === questionArray[0].correct){
        window.alert("correct!")
        hideSection("question-1")
        showSections("question-2")
      }
      else if(event.target.tagName != "H2"  && event.target.textContent != questionArray[0].correct){

        window.alert("WRONG!")
        timeleft = Math.max(0 ,timeleft - 10)
      question1.classList.add("hide")
      question2.classList.remove("hide")
      };
    })

   question2.addEventListener("click", function(event){
    console.log(event.target.tagName)
    if(event.target.tagName != "h2" && event.target.textContent === questionArray[1].correct){
      window.alert("correct!")
      end()
 }
    else if(event.target.tagName != "h2" && event.target.textContent != questionArray[1].correct){
    window.alert("WRONG!")
    timeleft = timeleft - 10
    end()
  }
})
    
}

  
document.getElementById("startBtn").addEventListener("click", start)
