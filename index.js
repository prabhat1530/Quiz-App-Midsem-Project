const questions = [
    {
      numb: 1,
      question: 'What does HTML stand for?',
      answer: 'Hyper Text Markup Language',
      options: [
        'Hyper Text Preprocessor',
        'Hyper Text Markup Language',
        'Hyper Text Multiple Language',
        'Hyper Tool Multi Language',
      ],
    },
    {
      numb: 2,
      question: 'What does CSS stand for?',
      answer: 'Cascading Style Sheet',
      options: [
        'Common Style Sheet',
        'Colorful Style Sheet',
        'Computer Style Sheet',
        'Cascading Style Sheet',
      ],
    },
    {
      numb: 3,
      question: 'What does PHP stand for?',
      answer: 'Hypertext Preprocessor',
      options: [
        'Hypertext Preprocessor',
        'Hypertext Programming',
        'Hypertext Preprogramming',
        'Hometext Preprocessor',
      ],
    },
    {
      numb: 4,
      question: 'What does SQL stand for?',
      answer: 'Structured Query Language',
      options: [
        'Stylish Question Language',
        'Stylesheet Query Language',
        'Statement Question Language',
        'Structured Query Language',
      ],
    },
    {
      numb: 5,
      question: 'What does XML stand for?',
      answer: 'eXtensible Markup Language',
      options: [
        'eXtensible Markup Language',
        'eXecutable Multiple Language',
        'eXTra Multi-Program Language',
        'eXamine Multiple Language',
      ],
    }
  ]
let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById('start');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const replayButton = document.getElementById('replay');
const exitButton = document.getElementById('exit');

startButton.addEventListener('click', startQuiz);
replayButton.addEventListener('click', startQuiz);
exitButton.addEventListener('click', () => {
    window.close();
    
});

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    startButton.style.display = 'none';
    questionContainer.classList.remove('hide');
    resultElement.classList.add('hide');
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
        event.target.classList.add('correct');
    } else {
        event.target.classList.add('wrong');
    }

    disableOptions();
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 1000); // Show next question after 1 second
    } else {
        showResult();
    }
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.disabled = true;
    });
}

function showResult() {
    questionContainer.classList.add('hide');
    resultElement.classList.remove('hide');
    scoreElement.innerText = `You scored ${score} out of ${questions.length}`;
}
