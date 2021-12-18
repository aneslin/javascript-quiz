var timerEl = document.getElementById("time");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var question5 = document.getElementById("question-5");
var initials = document.getElementById("initials");
var finalScore = document.getElementById("score");
let timeleft;
var scoreStore
var time
var localStoreHighScore
var highScoreList = document.getElementById("scoreList");


var questionMainEl = document.getElementById("greeting-box");
let questionSection = document.getElementById("question-section");


//get high scores.  if no local storage array exists, create one
function getScores(){
  if (localStorage.key("score")){
    localStoreHighScore = localStorage.getItem("score")
    console.log(localStoreHighScore)
    localStoreHighScore = JSON.parse(localStoreHighScore)
  }
  else{
    localStoreHighScore = {}
  };
}
//array of question objects
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
  "An array",
  "Any of the above"
],
"correct": "Any of the above"
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
];

//hide sections from the user
function hideSection(elementId){
    var visibleElement = document.getElementById(elementId);
    visibleElement.classList.add("hide");
}
//display sections to the user
function showSections(elementId){
    var visibleElement = document.getElementById(elementId);
    visibleElement.classList.remove("hide");
}
//counter function
function count(){
    timeleft=60;
    time = setInterval(function(){
      timerEl.textContent = timeleft;
        if (timeleft <= 0){
        end();
} 
else {
    timeleft --}
  },1000);
};
//build questions from question object
function questionMaker(question){
  var questionWrapper = document.createElement("div");
  var questionText = document.createElement("h2");
  questionText.textContent = question.question;
  questionWrapper.appendChild(questionText);
  var answerBlockEl = document.createElement("ul");
  for(i = 0; i < question.choices.length; i ++){
    var listItemEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    buttonEl.textContent=question.choices[i]
    listItemEl.appendChild(buttonEl)
    answerBlockEl.appendChild(listItemEl)
  };
  questionWrapper.appendChild(answerBlockEl);
  return questionWrapper;
}
//end the quiz and call score entry
function end(){
  
  clearInterval(time)
  hideSection("question-section");
  showSections("final-score");
  finalScore.textContent=timeleft;
  hideSection("time");
  document.getElementById("titleText").textContent= "Enter Your Initials";
  document.getElementById("store").addEventListener("click", function(event){
    event.preventDefault()
    if (initials.value.length > 0){
      localStoreHighScore[initials.value] = timeleft ;   
      localStoreHighScore = JSON.stringify(localStoreHighScore);
      localStorage.setItem("score",localStoreHighScore);
      hideSection("final-score");
      showSections("highScores");
      highScoreList.appendChild(displayScores());
    }
  }) 
}

//display the high scores
 function displayScores() {

  var scoreWrapper= document.createElement("ul") ;
  localStoreHighScore = JSON.parse(localStorage.getItem("score"));
  var scoreList = Object.entries(localStoreHighScore);
  console.log(scoreList);
  document.getElementById("titleText").textContent= "High Scores";
  for(var i = 0; i < scoreList.length; i++){
   var  listEl = document.createElement("li")
   listEl.textContent = scoreList[i][0]+ " --- " + scoreList[i][1];
   scoreWrapper.appendChild(listEl);
  }
  return scoreWrapper;
}


function questionChoice(questionId, arrayNum, thisQuestion, nextQuestion){
  
  questionId.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON" && event.target.textContent === questionArray[arrayNum].correct){
      window.alert("Correct!");
      hideSection(thisQuestion);
      showSections(nextQuestion);
    }
    else if(event.target.tagName === "BUTTON"  && event.target.textContent != questionArray[arrayNum].correct){

      window.alert("WRONG!")
      timeleft = Math.max(0 ,timeleft - 10)
      hideSection(thisQuestion);
      showSections(nextQuestion);
    };
  });

};


 var start = function  (){
    
  hideSection("greeting-box");
    //start the count
    count();
    //retrieve the highscore array
    getScores();
    //make questions and append to array
    //todo create by loop and not by individually
    question1.appendChild(questionMaker(questionArray[0]));
    question2.appendChild(questionMaker(questionArray[1]));
    question3.appendChild(questionMaker(questionArray[2]));
    question4.appendChild(questionMaker(questionArray[3]));
    question5.appendChild(questionMaker(questionArray[4]));
    //reveal question block
    showSections("question-section");

    questionChoice(question1,0, "question-1", "question-2");
    questionChoice(question2,1,"question-2", "question-3");
    questionChoice(question3,2,"question-3", "question-4");
    questionChoice(question4,3,"question-4", "question-5");

//question 5 - after question 5 call end()
   question5.addEventListener("click", function(event){
    console.log(event.target.tagName)
    if(event.target.tagName ==="BUTTON" && event.target.textContent === questionArray[4].correct){
      window.alert("correct!")
      end();
    }
    else if(event.target.tagName === "BUTTON" && event.target.textContent != questionArray[4].correct){
    window.alert("WRONG!")
    timeleft = timeleft - 10
    end();
    }
  });
    
};

document.getElementById("startBtn").addEventListener("click", start);
