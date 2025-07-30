
const questions = [
    {
        question: "What does Sentient AGI stand for?",
 options: ["Sentient Artificial General Intelligence", "Sentient Augmented General Intelligence", "Sentient Autonomous General Intelligence", "Sentient Advanced General Intelligence"],
        correct: 0
    },
    {
        question: "Who is the founder of Sentient AGI?",
        options: ["Himanshu Tyagi", "Vitalik Buterin", "Satoshi Nakamoto", "Nick Szabo"],
        correct: 0
    },
    {
        question: "What is the primary focus of Sentient AGI?",
        options: ["Developing a decentralized AI platform", "Creating a blockchain-based AI network", "Building an AI-powered cryptocurrency", "Designing an AI-driven trading platform"],
        correct: 0
    },
    {
        question: "What is the name of the seed round investor in Sentient AGI?",
        options: ["$85M seed round", "$50M seed round", "$20M seed round", "$10M seed round"],
        correct: 0
    },
    {
        question: "Who are the legends in the space that are part of Sentient AGI?",
        options: ["Pramod Viswanath, Himanshu Tyagi, Sandeep Nailwal", "Vitalik Buterin, Satoshi Nakamoto, Nick Szabo", "Elon Musk, Jeff Bezos, Mark Zuckerberg", "Bill Gates, Steve Jobs, Larry Page"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerText = questions[currentQuestion].question;
for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    document.getElementById(`option${i + 1}-label`).innerText = questions[currentQuestion].options[i];
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("prev-btn").addEventListener("click", prevQuestion);

function nextQuestion() {
    const userAnswer = getSelectedOption();
    if (userAnswer === questions[currentQuestion].correct) {
        score++;
        document.querySelector(".result").innerText = "Correct!";
        document.querySelector(".result").classList.add("correct");
    } else {
        document.querySelector(".result").innerText = "Incorrect!";
        document.querySelector(".result").classList.add("incorrect");
    }
    setTimeout(() => {
        document.querySelector(".result").classList.remove("correct", "incorrect");
        document.querySelector(".result").innerText = "";
    }, 2000);
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    updateQuestion();
}

function prevQuestion() {
    currentQuestion--;
    if (currentQuestion < 0) {
        currentQuestion = questions.length - 1;
    }
    updateQuestion();
}

function updateQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        document.getElementById(`option${i + 1}-label`).innerText = questions[currentQuestion].options[i];
    }
    // Reset radio buttons
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function getSelectedOption() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return i;
        }
    }
    return -1;
}