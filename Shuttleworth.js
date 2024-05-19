 
function startShuttleworthQuiz() {
    const questions = [
  {
    "question": "Q.What is Mark Shuttleworth primarily known for founding?",
    "options": ["Red Hat", "Canonical", "Google", "Mozilla"],
    "correctAnswer": "Canonical",
    "explanation": "Mark Shuttleworth is recognized as the founder and CEO of Canonical, the driving force behind the Linux-based Ubuntu operating system."
  },
  {
    "question": "Q.In which year did Mark Shuttleworth become the first South African to journey into space?",
    "options": ["2000", "2001", "2002", "2003"],
    "correctAnswer": "2002",
    "explanation": "Mark Shuttleworth made headlines in 2002 when he became the first South African to journey into space."
  },
  {
    "question": "Q.Where was Mark Shuttleworth born?",
    "options": ["Cape Town", "Johannesburg", "Durban", "Welkom"],
    "correctAnswer": "Welkom",
    "explanation": "Mark Shuttleworth was born in Welkom, Free State, South Africa."
  },
  {
    "question": "Q.What is Shuttleworth's estimated wealth according to the Sunday Times Rich List in 2020?",
    "options": ["£300 million", "£400 million", "£500 million", "£600 million"],
    "correctAnswer": "£500 million",
    "explanation": "The Sunday Times Rich List in 2020 estimated his wealth at approximately £500 million."
  },
  {
    "question": "Q.Which company did Shuttleworth establish in 1995?",
    "options": ["Canonical", "Thawte Consulting", "Knife Capital", "VeriSign"],
    "correctAnswer": "Thawte Consulting",
    "explanation": "In 1995, Shuttleworth established Thawte Consulting, a company specializing in digital certificates and Internet security."
  },
  {
    "question": "Q.For how much did Mark Shuttleworth sell Thawte Consulting to VeriSign in December 1999?",
    "options": ["R1.5 billion", "R2.5 billion", "R3.5 billion", "R4.5 billion"],
    "correctAnswer": "R3.5 billion",
    "explanation": "In December 1999, he sold Thawte to VeriSign, pocketing R3.5 billion."
  },
  {
    "question": "Q.What degree did Mark Shuttleworth earn from the University of Cape Town?",
    "options": ["Bachelor of Business Science in Finance and Information Systems", "Bachelor of Science in Computer Science", "Bachelor of Engineering", "Bachelor of Arts in Economics"],
    "correctAnswer": "Bachelor of Business Science in Finance and Information Systems",
    "explanation": "Shuttleworth earned a Bachelor of Business Science degree in Finance and Information Systems from the University of Cape Town."
  },
  {
    "question": "Q.What venture capital company did Mark Shuttleworth found in September 2000?",
    "options": ["Sequoia Capital", "HBD Venture Capital", "Andreessen Horowitz", "Kleiner Perkins"],
    "correctAnswer": "HBD Venture Capital",
    "explanation": "In September 2000, he founded HBD Venture Capital (Here be Dragons), functioning as both a business incubator and a venture capital provider."
  },
  {
    "question": "Q.Who succeeded Mark Shuttleworth as CEO of Canonical in December 2009?",
    "options": ["Larry Page", "Jane Silber", "Satya Nadella", "Sundar Pichai"],
    "correctAnswer": "Jane Silber",
    "explanation": "In December 2009, he stepped down as CEO of Canonical Ltd., passing the reins to Jane Silber."
  },
  {
    "question": "Q.When did Mark Shuttleworth resume the role of CEO at Canonical?",
    "options": ["July 2015", "July 2016", "July 2017", "July 2018"],
    "correctAnswer": "July 2017",
    "explanation": "In July 2017, at the conclusion of Jane Silber's tenure, Shuttleworth resumed the role of CEO at Canonical."
  },
  {
    "question": "Q.In which decade did Mark Shuttleworth contribute as one of the developers of the Debian operating system?",
    "options": ["1980s", "1990s", "2000s", "2010s"],
    "correctAnswer": "1990s",
    "explanation": "Mark Shuttleworth contributed as one of the developers of the Debian operating system in the 1990s."
  },
  {
    "question": "Q.What is the name of the nonprofit organization established by Shuttleworth in 2001?",
    "options": ["Debian Foundation", "Canonical Foundation", "Shuttleworth Foundation", "Ubuntu Foundation"],
    "correctAnswer": "Shuttleworth Foundation",
    "explanation": "In 2001, Mark Shuttleworth established the Shuttleworth Foundation, a nonprofit organization dedicated to social innovation."
  },
  {
    "question": "Q.Which Linux distribution did Shuttleworth fund the development of through Canonical Ltd. in 2004?",
    "options": ["Fedora", "Debian", "Red Hat", "Ubuntu"],
    "correctAnswer": "Ubuntu",
    "explanation": "In 2004, Mark Shuttleworth funded the development of Ubuntu, a Linux distribution based on Debian, through his company Canonical Ltd."
  },
  {
    "question": "Q.What title does Shuttleworth humorously hold in the Ubuntu community?",
    "options": ["CEO", "CTO", "COO", "SABDFL"],
    "correctAnswer": "SABDFL",
    "explanation": "In the Ubuntu community, Mark Shuttleworth humorously holds the title 'Self-Appointed Benevolent Dictator for Life' (SABDFL)."
  },
  {
    "question": "Q.Where did Shuttleworth spend six months analyzing Debian mailing list archives in early 2004?",
    "options": ["Australia", "Antarctica", "Africa", "Asia"],
    "correctAnswer": "Antarctica",
    "explanation": "To recruit talent for the Ubuntu project, Mark Shuttleworth spent six months analyzing Debian mailing list archives while traveling to Antarctica aboard the icebreaker Kapitan Khlebnikov in early 2004."
  },
  {
    "question": "Q.In which year was Shuttleworth announced as the first patron of KDE?",
    "options": ["2004", "2005", "2006", "2007"],
    "correctAnswer": "2006",
    "explanation": "On October 15, 2006, Mark Shuttleworth was announced as the first patron of KDE, a significant sponsorship role."
  },
  {
    "question": "Q.Who succeeded Mark Shuttleworth as CEO of Canonical in March 2010?",
    "options": ["Jane Silber", "Larry Page", "Satya Nadella", "Sundar Pichai"],
    "correctAnswer": "Jane Silber",
    "explanation": "Jane Silber, who had served as COO at Canonical since 2004, succeeded Mark Shuttleworth as CEO in March 2010."
  },
  {
    "question": "Q.In which year did Shuttleworth receive an honorary degree from the Open University?",
    "options": ["2009", "2010", "2011", "2012"],
    "correctAnswer": "2010",
    "explanation": "In September 2010, Mark Shuttleworth received an honorary degree from the Open University for his contributions."
  },
  {
    "question": "Q.In which debate did Mark Shuttleworth participate at the Oxford Union on November 9, 2012?",
    "options": ["The Climate Change Debate", "The Innovation Enigma", "The Education Reform Debate", "The Global Economy Discussion"],
    "correctAnswer": "The Innovation Enigma",
    "explanation": "On November 9, 2012, Mark Shuttleworth participated in a debate at the Oxford Union titled 'The Innovation Enigma' alongside Kenneth Rogoff."
  },
  {
    "question": "Q.What award did Shuttleworth and Ubuntu receive on October 25, 2013?",
    "options": ["Nobel Prize", "Austrian anti-privacy Big Brother Award", "Oscar", "Grammy Award"],
    "correctAnswer": "Austrian anti-privacy Big Brother Award",
    "explanation": "On October 25, 2013, Mark Shuttleworth and Ubuntu were awarded the Austrian anti-privacy Big Brother Award for sending local Ubuntu Unity Dash searches to Canonical servers by default."
  },
  
  {
    "question": "Q.On what date did Mark Shuttleworth become the second self-funded space tourist?",
    "options": ["April 25, 2001", "April 25, 2002", "April 25, 2003", "April 25, 2004"],
    "correctAnswer": "April 25, 2002",
    "explanation": "Mark Shuttleworth became the second self-funded space tourist on April 25, 2002."
  },
  {
    "question": "Q.How much did Mark Shuttleworth pay for his journey into space?",
    "options": ["$10 million", "$15 million", "$20 million", "$25 million"],
    "correctAnswer": "$20 million",
    "explanation": "Mark Shuttleworth paid approximately US$20 million for his journey into space."
  },
  {
    "question": "Q.Which spacecraft did Shuttleworth board for his spaceflight?",
    "options": ["Space Shuttle", "Soyuz TM-33", "Soyuz TM-34", "Apollo 11"],
    "correctAnswer": "Soyuz TM-34",
    "explanation": "Shuttleworth boarded the Russian Soyuz TM-34 mission for his spaceflight."
  },
  {
    "question": "Q.How long did Shuttleworth spend conducting experiments at the International Space Station?",
    "options": ["One day", "Three days", "Five days", "Eight days"],
    "correctAnswer": "Eight days",
    "explanation": "Shuttleworth spent eight days conducting experiments at the International Space Station."
  },
  {
    "question": "Q.Who did Shuttleworth converse with via video link during the Freedom Day celebrations?",
    "options": ["Nelson Mandela", "Thabo Mbeki", "Michelle Foster", "None of the above"],
    "correctAnswer": "Thabo Mbeki",
    "explanation": "During the Freedom Day celebrations, Shuttleworth conversed with Thabo Mbeki, then president of South Africa, via video link."
  },
  {
    "question": "Q.What is the name of Shuttleworth's private jet?",
    "options": ["Freedom One", "Ubuntu Jet", "Canonical One", "Space Shuttle"],
    "correctAnswer": "Canonical One",
    "explanation": "Shuttleworth's private jet is often referred to as Canonical One."
  },
  {
    "question": "Q.What is the mascot of Shuttleworth's private jet?",
    "options": ["Eagle", "Dragon", "Lion", "Bear"],
    "correctAnswer": "Dragon",
    "explanation": "The jet is adorned with a dragon named Norman, the mascot of HBD Venture Capital."
  },
  {
    "question": "Q.How much capital did Shuttleworth transfer from South Africa to the Isle of Man?",
    "options": ["R1 billion", "R2 billion", "R2.5 billion", "R3 billion"],
    "correctAnswer": "R2.5 billion",
    "explanation": "Shuttleworth transferred R2.5 billion in capital from South Africa to the Isle of Man."
  },
  {
    "question": "Q.What levy did the South African Reserve Bank impose to release Shuttleworth's assets?",
    "options": ["R100 million", "R200 million", "R250 million", "R300 million"],
    "correctAnswer": "R250 million",
    "explanation": "The South African Reserve Bank imposed a R250 million levy to release Shuttleworth's assets."
  },
  {
    "question": "Q.When did the Constitutional Court of South Africa reverse the decision regarding the exit charge imposed on Shuttleworth?",
    "options": ["June 15, 2015", "June 16, 2015", "June 17, 2015", "June 18, 2015"],
    "correctAnswer": "June 18, 2015",
    "explanation": "The Constitutional Court of South Africa reversed the decision on June 18, 2015."
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
