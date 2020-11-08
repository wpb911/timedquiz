var body = document.body;

var startQuiz = document.querySelector("#startquiz");
var timeEl = document.querySelector("#timecount");
var questionEl = document.querySelector(".intro");
var divEl =  document.querySelector("#wrapper");
var h1El = document.querySelector("h1");
var divq1El =  document.querySelector("#wrapper1");
var q1El = document.querySelector(".question");

//create elements for the question and answers 
var answerEl = document.createElement("div");
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var bu1 = document.createElement("button");
    var bu2 = document.createElement("button");
    var bu3 = document.createElement("button");
    var bu4 = document.createElement("button");
//create output element for correct or incorrect notification to user
    var sayit = document.createElement("p");

    // Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

var qa1 = {
    question : "Commonly used data types do NOT include:",
    ans1 : "1. strings",
    ans2 : "2. booleans",
    ans3 : "3. alerts" ,
    ans4 : "4. numbers",
    correct: "ans3"

};
var qa2 = {
    question : "The condition in an if/else statement is encloded within _____.",
    ans1 : "1. quotes",
    ans2 : "2. curly brackets",
    ans3 : "3. parentheses" ,
    ans4 : "4. square brackets",
    correct: "ans3"

};
var qa3 = {
    question : "Arrays in JavaScript can be used to store _____.",
    ans1 : "1. numbers and strings",
    ans2 : "2. other arrays",
    ans3 : "3. booleans" ,
    ans4 : "4. all of the above",
    correct: "ans4"

};

var qa4 = {
    question : "String values must be enclosed within _____ when being assigned to variables.",
    ans1 : "1. commas",
    ans2 : "2. curly brackets",
    ans3 : "3. quotes" ,
    ans4 : "4. parentheses",
    correct: "ans3"

};

var qa5 = {
    question : "A very useful tool used during development and debugging for printing content to the debugger is:",
    ans1 : "1. JavaScript",
    ans2 : "2. terminal/bash",
    ans3 : "3. for loops" ,
    ans4 : "4. console.log",
    correct: "ans4"

};



var secondsLeft = 75;


startQuiz.addEventListener("click", function(){
    
    
    //remove the h1 tag text, p tag text, and startbutton
     //divEl.innerHTML = "";
    h1El.innerHTML = "";
    questionEl.remove();
    startQuiz.remove();

    
    //questionEl.innerHTML = "";
   
    //startQuiz.setAttribute("display", "none");
  
    
    startQuizTimer();

    //ask the first question
    
    var h2El = document.createElement("h2");
    h2El.textContent = qa1.question;
    bu1.textContent = qa1.ans1 ;
    bu2.textContent = qa1.ans2 ;
    bu3.textContent = qa1.ans3 ;
    bu4.textContent = qa1.ans4 ;
    

    //add header 2 for questions
    body.appendChild(h2El);
    //add list for header 2
    h2El.appendChild(listEl);
    //add list item1 for header 2
    listEl.appendChild(li1);
        //add button1 to list item 
    li1.appendChild(bu1);
    
    //add list item 2
    listEl.appendChild(li2);
    //add button1 to list item 
    li2.appendChild(bu2);
    
    //add list item 3
    listEl.appendChild(li3);
    //add button1 to list item 
    li3.appendChild(bu3);

    //add list item 4
    listEl.appendChild(li4);
    //add button1 to list item 
    li4.appendChild(bu4);




    //set attributes for question and answers
    h2El.setAttribute("style","margin:auto; width:50%; text-align:left;");
    bu1.setAttribute("style", "margin:auto; width:auto; text-align:left; color:white; border-radius: 5px; background-color: purple; padding:4px;");
    bu2.setAttribute("style", "margin:auto; width:auto; text-align:left; color:white; border-radius: 5px; background-color: purple; padding:4px;");
    bu3.setAttribute("style", "margin:auto; width:auto; text-align:left; color:white; border-radius: 5px; background-color: purple; padding:4px;");
    bu4.setAttribute("style", "margin:auto; width:auto; text-align:left; color:white; border-radius: 5px; background-color: purple; padding:4px;");
    
    //set attribute for verifying answer
    bu1.setAttribute("name", "no");
    bu2.setAttribute("name", "no");
    bu3.setAttribute("name", "ans3");
    bu4.setAttribute("name", "no");
    
    //event delegation for answer choice 
    listEl.addEventListener("click", function(interval) {
        var pick = interval.target.name;     
        console.log(pick);

        if (pick === "ans3") {

            sayit.textContent = "Correct!";
            h2El.appendChild(sayit);

        } else {
            sayit.textContent = "Wrong!"
            h2El.appendChild(sayit);
            secondsLeft = secondsLeft - 10;

        }
       
        //setCounterText();
    });

});



function startQuizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft ;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        //sendMessage();
      }
  
    }, 1000);
}

  
