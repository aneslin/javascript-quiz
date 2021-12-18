var timerEl = document.getElementById("time");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var question5 = document.getElementById("question-5");
var initials = document.getElementById("initials")
var finalScore = document.getElementById("score")
let timeleft;
var scoreStore
var time
var localStoreHighScore
var highScoreList = document.getElementById("scoreList");
//create loop for array of choices

var questionMainEl = document.getElementById("greeting-box");
let questionSection = document.getElementById("question-section");

function getScores(){
  if (localStorage.key("score")){
    localStoreHighScore = localStorage.getItem("score")
    console.log(localStoreHighScore)
    localStoreHighScore = JSON.parse(localStoreHighScore)
  }
  else{
    localStoreHighScore = {}
  }
}

const questionArray = [
  //0
  {"question": "What Indicates an Array in Javascript?", 
    "choices":[
         "[Square Brackets]",
        "{Curly Brakets}",
         "<Pointy Things>"
    ],
    "correct": "[Square Brackets]"
},
//1
{"question": "What is missing 'for(var i ==0 ; i++)'",
"choices": [
  "for i in x",
  " i === length",
  "i < array.length"
],
"correct": "i < array.length"
},
//2
{"question": "Which of the Following is True?:",
"choices": [
  "Javascript is a lighter version of Java",
  "Javascript has no relation to Java",
  "Java is a superset of Javascript "
],
"correct": "Javascript has no relation to Java"
},
//3
{"question": "What can be stored inside an object?",
"choices": [
  "A string",
  "an array",
  "any of the above"
],
"correct": "any of the above"
},
//4
{"question": "You can Access things in an object with:",
"choices": [
  "object.key",
  "object(key)",
  "where key = key in object"
],
"correct":"object.key"
}


]

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
    timeleft=60
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
  
  clearInterval(time)
  hideSection("question-section")
  showSections("final-score")
  finalScore.textContent=timeleft
  hideSection("time")
  document.getElementById("titleText").textContent= "Enter Your Initials"

  document.getElementById("store").addEventListener("click", function(event){
    event.preventDefault()
    if (initials.value.length > 0){
      localStoreHighScore[initials.value] = timeleft
      
      console.log(localStoreHighScore)
      localStoreHighScore = JSON.stringify(localStoreHighScore)
      localStorage.setItem("score",localStoreHighScore)
      hideSection("final-score")
      showSections("highScores")
      highScoreList.appendChild(displayScores())
    }
  }) 
}


 function displayScores() {
  var scoreWrapper= document.createElement("ul") 
  localStoreHighScore = JSON.parse(localStorage.getItem("score"))
  var scoreList = Object.entries(localStoreHighScore)
  console.log(scoreList)
  document.getElementById("titleText").textContent= "High Scores"
  for(var i = 0; i < scoreList.length; i++){
   var  listEl = document.createElement("li")
   listEl.textContent = scoreList[i][0]+ " --- " + scoreList[i][1]
   scoreWrapper.appendChild(listEl)
  }
  return scoreWrapper
}



 var start = function  (){
    hideSection("greeting-box");
    count();
    getScores();

    question1.appendChild(questionMaker(questionArray[0]))
    question2.appendChild(questionMaker(questionArray[1]))
    question3.appendChild(questionMaker(questionArray[2]))
    question4.appendChild(questionMaker(questionArray[3]))
    question5.appendChild(questionMaker(questionArray[4]))

    showSections("question-section")
   //question 1 
    question1.addEventListener("click", function(event){
      console.log(event.target.tagName)
      if(event.target.tagName === "BUTTON" && event.target.textContent === questionArray[0].correct){
        window.alert("correct!")
        hideSection("question-1")
        showSections("question-2")
      }
      else if(event.target.tagName === "BUTTON"  && event.target.textContent != questionArray[0].correct){

        window.alert("WRONG!")
        timeleft = Math.max(0 ,timeleft - 10)
        hideSection("question-1")
        showSections("question-2")
      };
    })
//question 2
    question2.addEventListener("click", function(event){
      console.log(event.target.tagName)
      if(event.target.tagName === "BUTTON" && event.target.textContent === questionArray[1].correct){
        window.alert("correct!")
        hideSection("question-2")
        showSections("question-3")
      }
      else if(event.target.tagName === "BUTTON"  && event.target.textContent != questionArray[1].correct){

        window.alert("WRONG!")
        timeleft = Math.max(0 ,timeleft - 10)
        hideSection("question-2")
        showSections("question-3")
      };
    })
//question 3
    question3.addEventListener("click", function(event){
      console.log(event.target.tagName)
      if(event.target.tagName === "BUTTON" && event.target.textContent === questionArray[2].correct){
        window.alert("correct!")
        hideSection("question-3")
        showSections("question-4")
      }
      else if(event.target.tagName === "BUTTON"  && event.target.textContent != questionArray[2].correct){

        window.alert("WRONG!")
        timeleft = Math.max(0 ,timeleft - 10)
        hideSection("question-3")
        showSections("question-4")
      };
    })
//question 4
    question4.addEventListener("click", function(event){
      console.log(event.target.tagName)
      if(event.target.tagName === "BUTTON" && event.target.textContent === questionArray[3].correct){
        window.alert("correct!")
        hideSection("question-4")
        showSections("question-5")
      }
      else if(event.target.tagName === "BUTTON"  && event.target.textContent != questionArray[3].correct){

        window.alert("WRONG!")
        timeleft = Math.max(0 ,timeleft - 10)
        hideSection("question-4")
        showSections("question-5")
      };
    })


//question 5
   question5.addEventListener("click", function(event){
    console.log(event.target.tagName)
    if(event.target.tagName ==="BUTTON" && event.target.textContent === questionArray[4].correct){
      window.alert("correct!")
      end()
 }
    else if(event.target.tagName === "BUTTON" && event.target.textContent != questionArray[4].correct){
    window.alert("WRONG!")
    timeleft = timeleft - 10
    end()
  }
})
    
}

  
document.getElementById("startBtn").addEventListener("click", start)
