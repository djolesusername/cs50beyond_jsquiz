const questions = [
  {
    question: "What is Athena's favorite animal?",
    options: ["jellyfish", "penguins", "otters"],
    answer: "otters"
  },
  {
    question: "What is 10 + 10?",
    options: ["8", "20", "28", "30"],
    answer: "20"
  }
];

if (!localStorage.getItem("question_number"))
  localStorage.setItem("question_number", 0);
let question_number = localStorage.getItem("question_number");

if (!localStorage.getItem("correct")) localStorage.setItem("correct", 0);
let correct = localStorage.getItem("correct");

document.addEventListener("DOMContentLoaded", () => {
  load_question();
});

function load_question() {
  document.addEventListener("DOMContentLoaded", () => {});
  document.querySelector("#question_number").innerHTML = localStorage.getItem(
    "question_number"
  );
  document.querySelector("#correct").innerHTML = localStorage.getItem(
    "correct"
  );

  if (question_number == questions.length) {
    document.querySelector("#question").innerHTML = "GG Thanks for playing";
    const options = document.querySelector("#options");
    options.innerHTML = "";
    localStorage.setItem("question_number", 0);
    localStorage.setItem("correct", 0);
  }

  document.querySelector("#question").innerHTML =
    questions[question_number].question;
  const options = document.querySelector("#options");
  options.innerHTML = "";
  for (const option of questions[question_number].options) {
    options.innerHTML += `<button class="option", value="${option}" >${option}</button>`;
  }
  document.querySelectorAll(".option").forEach(option => {
    option.onclick = () => {
      if (option.value == questions[question_number].answer) {
        correct = localStorage.getItem("correct");
        correct++;
        localStorage.setItem("correct", correct);
      }
      question_number = localStorage.getItem("question_number");
      question_number++;
      localStorage.setItem("question_number", question_number);
      load_question();
    };
  });
}
