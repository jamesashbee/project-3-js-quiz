// JS Quiz Game

let questionCount = 0;    // To Count the number of questions 
let correctAnswer = -1;   // to check the correct answer in the questions array
let answerPress = "";     // to get the ID of the answer pressed
let startQuiz = false;    // only when true will it loop to next question

// score board 
const scoreboard = document.querySelector("#user__score");
scoreboard.innerHTML = "Are you good enougth to get on the Scoreboard?";

// question header 
const questionText = document.querySelector(".quiz__question-header");
questionText.innerHTML = "Press Start to Begin Quiz";

// Dispaly Answer Buttons
const answerButtonText = document.querySelectorAll(".quiz__answer");

// quiz image
const quizImageSource = document.querySelector("#quiz__img");

// on load show start button and hide reset button
const resetBtn = document.querySelector("#resetBtn");
document.getElementById("resetBtn").style.visibility = "hidden";


// Quiz questions as array
const quizAnswersArr = [
 [["Question 1 - What is the Capital of Wales?"],["Newport", "Cardiff", "London", "Wrexham"],[false,true,false,false],["img/wales.jpg"]],
 [["Question 2 - What Year was the Oringal Sonic the Hedgehog Game Released?"],["1988", "1989", "1990", "1991"],[false,false,false,true],["img/sonic-game.jpg"]],
 [["Question 3 - Who won the first Football World Cup?"],["England", "Germany", "Brazil", "Uruguay"],[false,false,false,true],["img/football-world-cup.jpg"]],
 [["Question 4 - Which Reggae Artist has sold the most records in the UK?"],["UB40", "Bob Marley", "Shaggy", "Eddy Grant"],[true,false,false,false],["img/reggae.jpg"]],
];



// Function - Loop to next quiz question - Triggered on selecting answer
const nextQuestion = () => {
  
  // if sucessfully completed last question
  if (questionCount >= quizAnswersArr.length) {
    questionText.innerHTML = "Well Done You Have Completed the Quiz";
    quizImageSource.src =  "/img/winner.jpg";
    scoreboard.innerHTML = "Quiz Champion You Got all " +(questionCount) +" Questions Right!";
    startQuiz = false;   
  }

  // if still got questions to complete 
  else{        
    // set prev question right answer back to light blue
    if(questionCount>0){
    document.getElementById(answerPress).style.backgroundColor = "lightblue";
    }

    // Display Question
    questionText.innerHTML = quizAnswersArr[questionCount][0];

    // Change Text on Answer Button 
    for (let answerButtonCount=0; answerButtonCount < 4; answerButtonCount++){
      answerButtonText[answerButtonCount].innerHTML = quizAnswersArr[questionCount][1][answerButtonCount];
    };

    // Store which is correct answer
   for ( answerButtonCount=0; answerButtonCount < 4; answerButtonCount++){
      if (quizAnswersArr[questionCount][2][answerButtonCount] === true){
      correctAnswer = answerButtonCount;
       };

    // display the image
    quizImageSource.src =  quizAnswersArr[questionCount][3];  
  };
      
    // change on screen display
    scoreboard.innerHTML = "You are on Question " +(questionCount +1);
  }

  };

  
// reset quiz function 
const resetQuiz = () => {

  questionCount = 0;
  questionText.innerHTML = "Press Start to Begin Quiz";

  // high score - top bit of text, may get current high score 
  scoreboard.innerHTML = "You Pressed Reset so you don't get on the Scoreboard";

  // button lables = just a / b / c /d
  const resetButtonDisplays = ["A","B","C","D"];
  for (let answerButtonCount=0; answerButtonCount < 4; answerButtonCount++){
    answerButtonText[answerButtonCount].innerHTML =resetButtonDisplays[answerButtonCount];
    
    // to add here on reset change button colour back to blue 
    document.getElementById(answerPress).style.backgroundColor = "lightblue";

    // after reset pressed hid reset and show start button
    document.getElementById("resetBtn").style.visibility = "hidden";
  document.getElementById("startBtn").style.visibility = "visible";
  };

  // image to blank
  quizImageSource.src = "/img/quiz.jpg";

  startQuiz = false;

};


// Start Quiz Button
const startQuizButton = document.querySelector("#startBtn");
startQuizButton.addEventListener("click",() => {

  //alert("Start Quiz");
  questionCount = 0;
  scoreboard.innerHTML = "Good Luck With the Quiz";
 
  nextQuestion();

  startQuiz = true;

  // after start pressed hide start and show reset button
  document.getElementById("resetBtn").style.visibility = "visible";
  document.getElementById("startBtn").style.visibility = "hidden";
});



// Reset Button listener
resetBtn.addEventListener("click",() => {
 resetQuiz();
});


// Quiz Answer Pressed
const answerButtonsPress = document.querySelectorAll(".quiz__answer");
answerButtonsPress.forEach((answerBtnPress) => {
  answerBtnPress.addEventListener("click", () => {

  // need error if have not started or at end
    if (startQuiz === true) {
    answerPress = answerBtnPress.id;

    // check to see if answer is correct
    if(answerPress == correctAnswer){

      // css answer in green
      document.getElementById(answerPress).style.backgroundColor = "#03EF62";  // green

      questionCount = questionCount +1;

     nextQuestion();
    }

    else{
      // update scoreboard to final score / game over 
      scoreboard.innerHTML = `Game Over, you got ${questionCount} questions Right...`;

      // css answer in red
      document.getElementById(answerPress).style.backgroundColor = "red";

      // lock quiz so have to reset
      startQuiz = false;
    };
 
  }

else {
  return;
}

  });
});
