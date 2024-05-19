 
function startTimQuiz() {
    const questions = [
        
  {
    "question": "Q.When was Sir Timothy John Berners-Lee born?",
    "options": ["June 8, 1955", "July 8, 1956", "August 8, 1957", "September 8, 1958"],
    "correctAnswer": "June 8, 1955",
    "explanation": "Sir Timothy John Berners-Lee was born on June 8, 1955."
  },
  {
    "question": "Q.What is Sir Timothy John Berners-Lee renowned for inventing?",
    "options": ["World Wide Web", "Personal computer", "Programming language Python", "Internet Protocol (IP)"],
    "correctAnswer": "World Wide Web",
    "explanation": "Sir Timothy John Berners-Lee is renowned for inventing the World Wide Web."
  },
  {
    "question": "Q.Which markup language did Sir Timothy John Berners-Lee create?",
    "options": ["HTML", "XML", "JSON", "CSS"],
    "correctAnswer": "HTML",
    "explanation": "Sir Timothy John Berners-Lee created the HTML markup language."
  },
  {
    "question": "Q.What was the title of the first successful HTTP client-server communication system proposed by Berners-Lee?",
    "options": ["ENQUIRE", "WWW", "NeXTSTEP", "CERN HTTPd"],
    "correctAnswer": "CERN HTTPd",
    "explanation": "CERN HTTPd was the title of the first successful HTTP client-server communication system proposed by Berners-Lee."
  },
  {
    "question": "Q.In which year did Sir Timothy John Berners-Lee propose his groundbreaking information management system?",
    "options": ["1987", "1988", "1989", "1990"],
    "correctAnswer": "1989",
    "explanation": "Sir Timothy John Berners-Lee proposed his groundbreaking information management system in 1989."
  },
  {
    "question": "Q.What position does Sir Timothy John Berners-Lee hold at the University of Oxford?",
    "options": ["Professorial research fellow", "Assistant professor", "Dean", "Chancellor"],
    "correctAnswer": "Professorial research fellow",
    "explanation": "Sir Timothy John Berners-Lee holds the position of professorial research fellow at the University of Oxford."
  },
  {
    "question": "Q.Which prestigious award did Sir Timothy John Berners-Lee receive in 2016?",
    "options": ["Nobel Prize", "Turing Award", "Fields Medal", "Pulitzer Prize"],
    "correctAnswer": "Turing Award",
    "explanation": "Sir Timothy John Berners-Lee received the Turing Award in 2016 for inventing the World Wide Web and its foundational technologies."
  },
  {
    "question": "Q.What is the name of the organization Sir Timothy John Berners-Lee founded that guides the Web's evolution?",
    "options": ["W3C", "ICANN", "IETF", "ISOC"],
    "correctAnswer": "W3C",
    "explanation": "Sir Timothy John Berners-Lee founded the World Wide Web Consortium (W3C), which guides the Web's evolution."
  },
  {
    "question": "Q.In which year was Sir Timothy John Berners-Lee knighted by Queen Elizabeth II?",
    "options": ["2002", "2004", "2006", "2008"],
    "correctAnswer": "2004",
    "explanation": "Sir Timothy John Berners-Lee was knighted by Queen Elizabeth II in 2004."
  },
  {
    "question": "Q.Which institution did Sir Timothy John Berners-Lee join as a senior researcher and hold the 3Com founder's chair?",
    "options": ["Harvard University", "Stanford University", "Massachusetts Institute of Technology (MIT)", "California Institute of Technology (Caltech)"],
    "correctAnswer": "Massachusetts Institute of Technology (MIT)",
    "explanation": "Sir Timothy John Berners-Lee joined MIT as a senior researcher and held the 3Com founder's chair."
  },

  {
    "question": "Q.What invention by Tim Berners-Lee was ranked as the foremost cultural moment shaping the modern world?",
    "options": ["Personal computer", "World Wide Web", "Mobile phone", "Television"],
    "correctAnswer": "World Wide Web",
    "explanation": "The invention of the World Wide Web by Tim Berners-Lee was ranked as the foremost cultural moment shaping the modern world."
  },
  {
    "question": "Q.In which year did Tim Berners-Lee establish the World Wide Web Consortium (W3C)?",
    "options": ["1992", "1994", "1996", "1998"],
    "correctAnswer": "1994",
    "explanation": "Tim Berners-Lee established the World Wide Web Consortium (W3C) in 1994."
  },
  {
    "question": "Q.What approach did Tim Berners-Lee champion for the Web's technology?",
    "options": ["Patent-protected", "Royalty-free", "Subscription-based", "Encrypted"],
    "correctAnswer": "Royalty-free",
    "explanation": "Tim Berners-Lee championed a royalty-free approach for the Web's technology."
  },
  {
    "question": "Q.What chair did Tim Berners-Lee assume in December 2004?",
    "options": ["Chair in Computer Science at MIT", "Chair in Computer Science at University of Southampton", "Chair in Data Science at Stanford", "Chair in Artificial Intelligence at Harvard"],
    "correctAnswer": "Chair in Computer Science at University of Southampton",
    "explanation": "In December 2004, Tim Berners-Lee assumed a chair in computer science at the University of Southampton."
  },
  {
    "question": "Q.Which project did Tim Berners-Lee and Professor Nigel Shadbolt spearhead in the UK?",
    "options": ["Open Data Institute", "Alliance for Affordable Internet", "data.gov.uk", "World Wide Web Foundation"],
    "correctAnswer": "data.gov.uk",
    "explanation": "Tim Berners-Lee and Professor Nigel Shadbolt spearheaded the data.gov.uk project in the UK."
  },
  {
    "question": "Q.What is the mission of the World Wide Web Foundation (WWWF) founded by Tim Berners-Lee?",
    "options": ["Enhancing global e-commerce", "Advancing the Web as a force for positive transformation", "Developing new programming languages", "Creating online educational platforms"],
    "correctAnswer": "Advancing the Web as a force for positive transformation",
    "explanation": "The mission of the World Wide Web Foundation (WWWF) is to advance the Web as a force for positive transformation."
  },
  {
    "question": "Q.What principle does Tim Berners-Lee advocate for, believing it to be a fundamental human network right?",
    "options": ["Data encryption", "Net neutrality", "Online advertising", "Social media integration"],
    "correctAnswer": "Net neutrality",
    "explanation": "Tim Berners-Lee advocates for net neutrality, believing it to be a fundamental human network right."
  },
  {
    "question": "Q.During which event was Tim Berners-Lee celebrated as the 'Inventor of the World Wide Web'?",
    "options": ["2008 Beijing Olympics", "2010 World Cup", "2012 Summer Olympics", "2014 Winter Olympics"],
    "correctAnswer": "2012 Summer Olympics",
    "explanation": "Tim Berners-Lee was celebrated as the 'Inventor of the World Wide Web' during the 2012 Summer Olympics."
  },
  {
    "question": "Q.Which organization did Tim Berners-Lee co-found with Nigel Shadbolt in 2012?",
    "options": ["Alliance for Affordable Internet", "Open Data Institute", "World Wide Web Foundation", "MIT Media Lab"],
    "correctAnswer": "Open Data Institute",
    "explanation": "Tim Berners-Lee co-founded the Open Data Institute with Nigel Shadbolt in 2012."
  },
  {
    "question": "Q.What project led by Tim Berners-Lee at MIT focuses on true data ownership and enhanced privacy standards?",
    "options": ["Curl", "Solid", "ENQUIRE", "NeXTSTEP"],
    "correctAnswer": "Solid",
    "explanation": "The Solid project led by Tim Berners-Lee at MIT focuses on true data ownership and enhanced privacy standards."
  },

  {
    "question": "Q.When did Tim Berners-Lee decide to support the Encrypted Media Extensions (EME) proposal?",
    "options": ["January 2017", "March 2017", "July 2017", "September 2017"],
    "correctAnswer": "March 2017",
    "explanation": "Tim Berners-Lee decided to support the Encrypted Media Extensions (EME) proposal in March 2017."
  },
  {
    "question": "Q.Which organizations opposed the EME specification approved by Tim Berners-Lee?",
    "options": ["Google, Microsoft, Apple", "Electronic Frontier Foundation, Defective by Design, Free Software Foundation", "Mozilla, IBM, Intel", "Amazon, Netflix, Hulu"],
    "correctAnswer": "Electronic Frontier Foundation, Defective by Design, Free Software Foundation",
    "explanation": "The EME specification was opposed by the Electronic Frontier Foundation (EFF), Defective by Design, and the Free Software Foundation."
  },
  {
    "question": "Q.What is the aim of the open-source startup Inrupt, founded by Tim Berners-Lee?",
    "options": ["Developing new web browsers", "Advancing AI technologies", "Cultivating a commercial ecosystem around the Solid project", "Creating social media platforms"],
    "correctAnswer": "Cultivating a commercial ecosystem around the Solid project",
    "explanation": "Inrupt aims to cultivate a commercial ecosystem centered around the Solid project, which focuses on user control over personal data."
  },
  {
    "question": "Q.What initiative did Tim Berners-Lee introduce at the Internet Governance Forum in Berlin in November 2019?",
    "options": ["Alliance for Affordable Internet", "Contract for the Web", "Open Data Institute", "data.gov.uk"],
    "correctAnswer": "Contract for the Web",
    "explanation": "Tim Berners-Lee introduced the Contract for the Web initiative at the Internet Governance Forum in Berlin in November 2019."
  },
  {
    "question": "Q.What notable recognition did Tim Berners-Lee receive from Queen Elizabeth II in 2004?",
    "options": ["Order of Merit", "Turing Award", "Knight Bachelor", "Queen Elizabeth Prize for Engineering"],
    "correctAnswer": "Knight Bachelor",
    "explanation": "Tim Berners-Lee was knighted by Queen Elizabeth II in 2004."
  },
  {
    "question": "Q.Which prestigious award did Tim Berners-Lee receive in 2017 for his contributions to the invention of the World Wide Web?",
    "options": ["Nobel Prize", "Queen Elizabeth Prize for Engineering", "Turing Award", "Royal Society Fellowship"],
    "correctAnswer": "Turing Award",
    "explanation": "Tim Berners-Lee received the Turing Award in 2017 for his contributions to the invention of the World Wide Web."
  },
  {
    "question": "Q.In what year did Tim Berners-Lee receive an honorary degree from the University of Manchester?",
    "options": ["2001", "2004", "2007", "2012"],
    "correctAnswer": "2001",
    "explanation": "Tim Berners-Lee received an honorary degree from the University of Manchester in 2001."
  },
  {
    "question": "Q.How much was the source code of the web, authored by Tim Berners-Lee, auctioned for as an NFT in 2021?",
    "options": ["$2,500,000", "$3,400,000", "$5,434,500", "$6,200,000"],
    "correctAnswer": "$5,434,500",
    "explanation": "The source code of the web was auctioned for $5,434,500 as an NFT in 2021."
  },
  {
    "question": "Q.What is the main goal of the Solid project led by Tim Berners-Lee?",
    "options": ["Enhancing web browser performance", "Improving online shopping experiences", "Empowering users with greater control over their personal data", "Developing new social media algorithms"],
    "correctAnswer": "Empowering users with greater control over their personal data",
    "explanation": "The Solid project aims to empower users with greater control over their personal data."
  },
  {
    "question": "Q.In which faith did Tim Berners-Lee raise his children after distancing himself from religion in his youth?",
    "options": ["Catholicism", "Anglicanism", "Unitarian Universalism", "Buddhism"],
    "correctAnswer": "Unitarian Universalism",
    "explanation": "Tim Berners-Lee embraced Unitarian Universalism when he became a parent."
  },
];

    
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

const quizPage = document.createElement("div");
quizPage.classList.add("quiz-page");

for (let i = 0; i < shuffledQuestions.length; i++) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");

    const questionElement = document.createElement("h3");
    questionElement.textContent = shuffledQuestions[i].question;

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    for (let j = 0; j < shuffledQuestions[i].options.length; j++) {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = shuffledQuestions[i].options[j];

        optionElement.addEventListener("click", function () {
            toggleSelected(optionElement);
            storeUserAnswer(i, optionElement.textContent);
        });

        optionsContainer.appendChild(optionElement);
    }

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsContainer);
    quizPage.appendChild(questionContainer);
}

document.body.innerHTML = "";
document.body.appendChild(quizPage);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.style.fontSize = "30px";
submitButton.style.backgroundColor = "#900C3F";
submitButton.style.color = "white";
submitButton.style.padding = "10px 20px";
submitButton.style.border = "none";
submitButton.style.borderRadius = "6px";

submitButton.addEventListener("click", function () {
    submitQuiz(shuffledQuestions);
});

buttonContainer.appendChild(submitButton);

document.body.appendChild(buttonContainer);

const style = document.createElement("style");
style.textContent = `
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .quiz-page {
        margin-bottom: 30px; 
    }
    .button-container {
        margin-top: 10px; 
    }
    .option.selected {
        background-color: #4CAF50;
        color: white;
    }
`;
document.head.appendChild(style);

function storeUserAnswer(questionIndex, userAnswer) {
    questions[questionIndex].userAnswer = userAnswer;
}

function toggleSelected(optionElement) {
    const optionsContainer = optionElement.parentElement;
    const options = optionsContainer.getElementsByClassName("option");

    for (let option of options) {
        option.classList.remove("selected");
    }

    optionElement.classList.add("selected");
}

async function submitQuiz(questions) {
    let result = "<br><strong>Results:</strong><br>";
    let allQuestionsAnswered = true;
    let correctAnswersCount = 0;

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = questions[i].userAnswer;
        const correctAnswer = questions[i].correctAnswer;
        const explanationLines = questions[i].explanation.split('\n');
        const explanationHTML = explanationLines.map(line => `${line}<br>`).join('');

        const isCorrect = userAnswer === correctAnswer;

        result += `<br><strong>${questions[i].question}</strong><br>`;
        
 
        if (isCorrect) {
            result += `<div>Your Answer: <span style="color: #006400;">${userAnswer}</span></div>`;
            result += `<div>Correct Answer: <span style="color: #006400;">${correctAnswer}</span></div>`;
        } else {
            result += `<div>Your Answer: <span style="color: #FF0000;">${userAnswer}</span></div>`;
            result += `<div>Correct Answer: <span style="color: #006400;">${correctAnswer}</span></div>`;
        }
        
 
        result += `<div>Explanation: <span style="color: #0000FF;">${explanationHTML || "No explanation available"}</span></div>`;

        if (isCorrect) {
            correctAnswersCount++;
        }

        if (!userAnswer) {
            allQuestionsAnswered = false;
        }
    }

    if (!allQuestionsAnswered) {
        alert("Please answer all questions before submitting.");
        return;
    }

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswersCount / totalQuestions) * 100;
    const scoreText = `${correctAnswersCount}/${totalQuestions} (${scorePercentage.toFixed(2)}%)`;

    await okh(correctAnswersCount, totalQuestions, scorePercentage);

    const resultPage = document.createElement("div");
    resultPage.classList.add("result-page");

    const resultContainer = document.createElement("div");
    resultContainer.id = "result-container";
    resultContainer.innerHTML = `
        <h2 style="font-size: 28px; color: #4caf50;">Impressive Quiz Results</h2>
        ${result}
        <div class="score" style="font-size: 24px; color: #4caf50; margin-top: 20px;">Total Score: <span style="color: #4caf50;">${scoreText}</span></div>
    `;

    resultContainer.style.textAlign = "center";
    resultContainer.style.marginTop = "30px";
    resultContainer.style.padding = "30px";
    resultContainer.style.backgroundColor = "#f8f8f8";
    resultContainer.style.borderRadius = "10px";
    resultContainer.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";

    resultPage.appendChild(resultContainer);

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.style.fontSize = "20px";
    homeButton.style.backgroundColor = "#FFD700";  
    homeButton.style.color = "black";  
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "6px";
    homeButton.style.display = "block";
    homeButton.style.marginLeft = "auto";
    homeButton.style.marginRight = "auto";
    homeButton.style.marginBottom = "20px";

    homeButton.addEventListener("click", function () {
        window.location.href = "https://ersachinbhati.github.io/Foxian/";
    });

    resultPage.appendChild(homeButton);

    document.body.innerHTML = "";
    document.body.appendChild(resultPage);
}

async function okh(correctAnswersCount, totalQuestions) {
    try {
        const totalScore = correctAnswersCount;

        const documentToInsert = {
            correctAnswers: correctAnswersCount.toString(),
            totalQuestions: totalQuestions.toString(),
            totalScore: totalScore  
        };

        const response = await fetch('/api/quizResults', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(documentToInsert)
        });

        if (response.ok) {
            console.log('Quiz results saved successfully');
        } else {
            console.error('Failed to save quiz results:', response.statusText);
        }
    } catch (error) {
        console.error('Error saving quiz results:', error);
    }
}
}
