var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk")
var log = console.log 

log(chalk.green("Do you know about Indian geography? Let's find out!\n"));
var username = readlineSync.question(chalk.magenta("Please Enter Your Name\n")) ;
console.log(chalk.red("Hi, " + username + " Enter a/b/c/d for each question to answer\n"))

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are Right")
    score = score + 1;
    
  }else{
    console.log("You are Wrong")
  }
  console.log(chalk.blue("currentscore:" + score))
}

var players = [{
  
}]

var questions = [{
  question:"1)Which of the following state is not crossed by the Tropic of Cancer?\n a: Rajasthan\n b: Chattisgarh\n c: Odisha\n d: Tripura\n" , 
  answer:"c"
}, 
{
  question:"2)Which of the following Union Territories of India will best  suited for summer vacation, if you choose Kavarati to visit?\n a: Pondicherry\n b: Andaman and Nicobar\n c: Lakshadweep\n d: Diu and Daman\n", 
  answer:"c"
}, 
{
  question:"3) Which of the following the country does not share land boundary with India?\n a: Bhutan\n b: Bangladesh\n c: Nepal\n d: Tajikistan\n", 
  answer:"d"
  }, 
  { 
  question:"4)Which of the following is called the Southernmost Himalayas?\n a: Siwaliks\n b: Himadri\n c: Himachal\n d: None of the above", 
  answer:"a"
}, 
{
  question:"5)Which of the following is popular name of  the Indian islands in the Arabian Sea?\n a: Andaman and Nicobar Islands\n b: Lakshadweep Islands\n c: Maldives\n d: Both A & D\n", answer:"b"
}, 
{
  question:"6) Which of the following is the oldest mountain range in India?\n a:Aravali Mountains\n b: Western Ghats\n c: Himalayas\n d: Both A & C\n", 
  answer:"a"
}

  ]
  
  for(i=0; i<questions.length; i++){
    var absoluteQuestion = questions[i]
    play(absoluteQuestion.question,absoluteQuestion.answer)
    console.log("-----------------------------------------")
  }
  
  console.log("Congrats! You've finished the game.\n You Scored:" + score )