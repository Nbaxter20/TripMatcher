const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");

// Define questions and their branching paths
const questions = [
  {
    question: "Rank what you prioritize most:",
    options: [
      "Dining 🍽️",
      "Travel ✈️",
      "Shopping 🛍️",
      "Entertainment 🎭",
      "Relaxation 🌿",
    ],
    next: {
      "Dining 🍽️": 1,
      "Travel ✈️": 2,
      "Shopping 🛍️": 3,
      "Entertainment 🎭": 4,
      "Relaxation 🌿": 5,
    },
  },
  {
    question: "What type of food do you crave?",
    options: ["Street food", "Fine dining", "Casual dining"],
    next: { "Street food": 6, "Fine dining": 6, "Casual dining": 6 },
  },
  {
    question: "Do you prefer a nearby getaway or international trip?",
    options: ["Nearby", "International"],
    next: { Nearby: 6, International: 6 },
  },
  {
    question: "Are you looking for clothes, souvenirs, or tech?",
    options: ["Clothes", "Souvenirs", "Tech"],
    next: { Clothes: 6, Souvenirs: 6, Tech: 6 },
  },
  {
    question:
      "Would you rather watch a movie, go to a concert, or visit an amusement park?",
    options: ["Movie 🎥", "Concert 🎶", "Amusement park 🎢"],
    next: { "Movie 🎥": 6, "Concert 🎶": 6, "Amusement park 🎢": 6 },
  },
  {
    question: "Do you want a spa day, a beach trip, or a cozy home experience?",
    options: ["Spa day 💆", "Beach trip 🏖️", "Cozy home 🏡"],
    next: { "Spa day 💆": 6, "Beach trip 🏖️": 6, "Cozy home 🏡": 6 },
  },
  {
    question: "Great choice! Here’s what we should do: 🎉",
    options: [], // Final message
    next: {},
  },
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
  const questionData = questions[index];
  questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;

  if (questionData.options.length > 0) {
    questionData.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => handleAnswer(option, index);
      questionContainer.appendChild(button);
    });
  } else {
    nextButton.style.display = "none"; // Hide next button if it's the last question
  }
}

function handleAnswer(answer, index) {
  if (questions[index].next[answer] !== undefined) {
    currentQuestionIndex = questions[index].next[answer];
    loadQuestion(currentQuestionIndex);
  }
}

// Load the first question
loadQuestion(currentQuestionIndex);
