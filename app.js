const quizQuestions = [
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Iron", "Carbon"],
    answer: "Oxygen"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1923", "1931"],
    answer: "1912"
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    question: "What is the main ingredient of guacamole?",
    options: ["Tomato", "Onion", "Avocado", "Lime"],
    answer: "Avocado"
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["New Zealand", "South Africa", "Australia", "Brazil"],
    answer: "Australia"
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Pluto"],
    answer: "Mercury"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    answer: "Pound Sterling"
  }
];

const crtAudio = new Audio('assets/correct.mp3');

const que = document.querySelector(".que");
const options = document.querySelectorAll(".opt");
const next = document.querySelector(".nxt");
let i = 0;
let j = 0;
update();
function update(){
que.innerText = quizQuestions[i].question;
 for(opt of options){
   opt.innerText = quizQuestions[i].options[j];
   j++;
 }

}
// next.addEventListener("click", () => {
//   i++;
//   j = 0;

//   // Reset background by removing 'correct' class from all options
//   options.forEach(opt => {
//     opt.classList.remove("correct");
//     opt.classList.remove("wrong");
//     opt.disabled = false;
//   });

//   update();
// });
next.addEventListener("click", () => {
  if (i < quizQuestions.length - 1) {
    i++;
    j = 0;
    options.forEach(opt => {
      opt.classList.remove("correct", "wrong");
      opt.disabled = false;
    });
    update();
  } else {
    que.innerText = "Quiz completed!";
    options.forEach(opt => opt.style.display = "none");
    next.style.display = "none";
  }
});

 function correct(optn){
   optn.classList.add("correct");
   crtAudio.play();
 }
 function wrong(optn){
  optn.classList.add("wrong");
 }
 function checkCorrect(){
  for(opt of options){
    if(opt.innerText == quizQuestions[i].answer){
      correct(opt);
    }
  }
 }
 function checkAnswer(){
    let optn = this;
    if(optn.innerText == quizQuestions[i].answer){
       correct(optn)
    } else{
      wrong(optn)
      checkCorrect()
    }

    for(opt of options){
     opt.disabled = true;
    }
 }
 for(opt of options){
    opt.addEventListener("click", checkAnswer);
 }
