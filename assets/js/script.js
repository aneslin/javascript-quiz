var timerEl = document. getElementById("time")
var question = document.createElement("h3")
var answer1Ul = document.createElement("ul")

//create loop for array of choices

var questionMainEl = document.getElementById("greeting-box");
let questionSection = document.getElementById("question-section");

let sectionArray =[questionMainEl, questionSection]

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
}

]


function hideSections(){
  for (let i = 0; i < sectionArray.length; i++) {
      if(!sectionArray[i].classList.contains('hide')){
        sectionArray[i].classList.add('hide')
      }
  }
}

function count(){
  timeleft =30;

  var time = setInterval(function(){
    timerEl.textContent = timeleft;
   if (timeleft===0){
  clearInterval(time)
  //call score page
} 
//or if question array i = questionArray length
else {
    timeleft --}
  },1000)
} ;



 function start (){
count();
hideSections();
for(var i = 0; i <  questionArray.length; i++){
  console.log(questionArray[i])
  //create li and button 

  //event listerner on button. if button === {"correct"} index +1, else timer -10 AND index +1 
}

questionSection.classList.remove('hide')


}




//document.getElementById("startBtn").addEventListener("click", start())
