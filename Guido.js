 
function startGuidoQuiz() {
    const questions = [
        

  {
    "question": "Q.When was Guido van Rossum born?",
    "options": ["January 31, 1954", "January 31, 1955", "January 31, 1956", "January 31, 1957"],
    "correctAnswer": "January 31, 1956",
    "explanation": "Guido van Rossum was born on January 31, 1956."
  },
  {
    "question": "Q.What programming language is Guido van Rossum renowned for creating?",
    "options": ["Java", "C++", "Python", "Ruby"],
    "correctAnswer": "Python",
    "explanation": "Guido van Rossum is renowned for creating Python, a widely used programming language."
  },
  {
    "question": "Q.Until when did Guido van Rossum serve as the 'benevolent dictator for life' (BDFL) of Python?",
    "options": ["July 12, 2016", "July 12, 2017", "July 12, 2018", "July 12, 2019"],
    "correctAnswer": "July 12, 2018",
    "explanation": "Guido van Rossum served as the 'benevolent dictator for life' (BDFL) of Python until stepping down on July 12, 2018."
  },
  {
    "question": "Q.Where did Guido van Rossum earn his master's degree?",
    "options": ["University of Leiden", "University of Amsterdam", "Delft University of Technology", "Eindhoven University of Technology"],
    "correctAnswer": "University of Amsterdam",
    "explanation": "Guido van Rossum earned his master's degree in mathematics and computer science from the University of Amsterdam."
  },
  {
    "question": "Q.In which year did Guido van Rossum win a bronze medal in the International Mathematical Olympiad?",
    "options": ["1972", "1973", "1974", "1975"],
    "correctAnswer": "1974",
    "explanation": "Guido van Rossum won a bronze medal in the 1974 International Mathematical Olympiad."
  },
  {
    "question": "Q.What is the name of Guido van Rossum's brother who is a type designer and programmer?",
    "options": ["Jan van Rossum", "Just van Rossum", "Peter van Rossum", "Mark van Rossum"],
    "correctAnswer": "Just van Rossum",
    "explanation": "Guido van Rossum's brother, Just van Rossum, is a type designer and programmer."
  },
  {
    "question": "Q.Which typeface did Just van Rossum design?",
    "options": ["Arial", "Helvetica", "Courier", "Python Powered logo typeface"],
    "correctAnswer": "Python Powered logo typeface",
    "explanation": "Just van Rossum designed the typeface used in the 'Python Powered' logo."
  },
  {
    "question": "Q.Where does Guido van Rossum currently reside?",
    "options": ["Amsterdam, Netherlands", "New York, USA", "Belmont, California, USA", "London, UK"],
    "correctAnswer": "Belmont, California, USA",
    "explanation": "Guido van Rossum currently resides in Belmont, California, with his wife and son."
  },
  {
    "question": "Q.What is the name of Guido van Rossum's wife?",
    "options": ["Linda Knapp", "Kim Knapp", "Anna Knapp", "Sarah Knapp"],
    "correctAnswer": "Kim Knapp",
    "explanation": "Guido van Rossum's wife is named Kim Knapp."
  },
  {
    "question": "Q.What is the naming convention for 'van' in Guido van Rossum's surname when used alone?",
    "options": ["It is always lowercase", "It is always capitalized", "It is capitalized when used alone", "It is never capitalized"],
    "correctAnswer": "It is capitalized when used alone",
    "explanation": "According to Dutch naming conventions, the 'van' in Guido van Rossum's surname is capitalized when used alone."
  },
  {
    "question": "Q.To which Unix variant did Guido van Rossum contribute a glob() routine in 1986?",
    "options": ["Linux", "BSD Unix", "System V", "Solaris"],
    "correctAnswer": "BSD Unix",
    "explanation": "Guido van Rossum contributed a glob() routine to BSD Unix in 1986."
  },
  {
    "question": "Q.Which programming language did Van Rossum help develop at Centrum Wiskunde & Informatica (CWI)?",
    "options": ["Python", "ABC", "Java", "Perl"],
    "correctAnswer": "ABC",
    "explanation": "Van Rossum was involved in the development of the ABC programming language at Centrum Wiskunde & Informatica (CWI)."
  },
  {
    "question": "Q.What is the name of the early Python-based web browser created by Van Rossum?",
    "options": ["Netscape", "Mosaic", "Grail", "Lynx"],
    "correctAnswer": "Grail",
    "explanation": "Guido van Rossum created Grail, an early Python-based web browser."
  },
  {
    "question": "Q.Where did Guido van Rossum work immediately after leaving BeOpen.com?",
    "options": ["Google", "Elemental Security", "Zope Corporation", "CWI"],
    "correctAnswer": "Zope Corporation",
    "explanation": "After leaving BeOpen.com, Guido van Rossum worked at Zope Corporation until 2003."
  },
  {
    "question": "Q.Which project did Van Rossum create during his time at Google that was named after a Dutch artist?",
    "options": ["Van Gogh", "Rembrandt", "Mondrian", "Vermeer"],
    "correctAnswer": "Mondrian",
    "explanation": "Van Rossum created Mondrian, a Python-based code review system named after the Dutch artist Piet Mondrian, during his time at Google."
  },
  {
    "question": "Q.When did Guido van Rossum leave Google?",
    "options": ["December 7, 2010", "December 7, 2011", "December 7, 2012", "December 7, 2013"],
    "correctAnswer": "December 7, 2012",
    "explanation": "Guido van Rossum left Google on December 7, 2012."
  },
  {
    "question": "Q.What role did Van Rossum have at Elemental Security?",
    "options": ["Developing a custom programming language", "System Administrator", "Chief Technical Officer", "Database Administrator"],
    "correctAnswer": "Developing a custom programming language",
    "explanation": "At Elemental Security, Guido van Rossum focused on developing a custom programming language."
  },
  {
    "question": "Q.Which organization did Van Rossum join after leaving Zope Corporation?",
    "options": ["Google", "Elemental Security", "NIST", "CNRI"],
    "correctAnswer": "Elemental Security",
    "explanation": "After leaving Zope Corporation, Guido van Rossum joined Elemental Security."
  },
  {
    "question": "Q.Which institution did Guido van Rossum work for in the United States before joining BeOpen.com?",
    "options": ["MIT", "NIST", "Google", "Microsoft"],
    "correctAnswer": "NIST",
    "explanation": "Guido van Rossum worked at the U.S. National Institute of Standards and Technology (NIST) before joining BeOpen.com."
  },
  {
    "question": "Q.What significant project did Van Rossum name after the Dutch designer Gerrit Rietveld?",
    "options": ["Mondrian", "Rietveld", "Grail", "Python"],
    "correctAnswer": "Rietveld",
    "explanation": "Van Rossum named a project after the Dutch designer Gerrit Rietveld during his time at Google."
  },
  {
    "question": "Q.Which company did Guido van Rossum join in January 2013?",
    "options": ["Google", "Microsoft", "Dropbox", "Zope Corporation"],
    "correctAnswer": "Dropbox",
    "explanation": "In January 2013, Guido van Rossum joined Dropbox, a cloud file storage company."
  },
  {
    "question": "Q.When did Guido van Rossum officially retire from Dropbox?",
    "options": ["October 2018", "October 2019", "October 2020", "October 2021"],
    "correctAnswer": "October 2019",
    "explanation": "Guido van Rossum officially retired from Dropbox in October 2019."
  },
  {
    "question": "Q.What title does Guido van Rossum hold at Microsoft?",
    "options": ["Senior Developer", "Chief Technical Officer", "Distinguished Engineer", "Principal Architect"],
    "correctAnswer": "Distinguished Engineer",
    "explanation": "Guido van Rossum holds the title of Distinguished Engineer at Microsoft."
  },
  {
    "question": "Q.When did Guido van Rossum join Microsoft's Developer Division?",
    "options": ["November 12, 2018", "November 12, 2019", "November 12, 2020", "November 12, 2021"],
    "correctAnswer": "November 12, 2020",
    "explanation": "On November 12, 2020, Guido van Rossum announced his return from retirement to join Microsoft's Developer Division."
  },
  {
    "question": "Q.What inspired the name 'Python' for the programming language created by Guido van Rossum?",
    "options": ["Python snake", "Monty Python's Flying Circus", "Greek mythology", "A type of flower"],
    "correctAnswer": "Monty Python's Flying Circus",
    "explanation": "Guido van Rossum chose the name 'Python' somewhat whimsically, influenced by his love for Monty Python's Flying Circus."
  },
  {
    "question": "Q.Which project did Van Rossum propose to DARPA in 1999?",
    "options": ["Project ABC", "Computer Programming for Everybody", "SETL Development", "Python Enhancement"],
    "correctAnswer": "Computer Programming for Everybody",
    "explanation": "In 1999, Guido van Rossum proposed 'Computer Programming for Everybody' to DARPA."
  },
  {
    "question": "Q.Which programming language did Python's precursor, ABC, draw inspiration from?",
    "options": ["C", "SETL", "Java", "Pascal"],
    "correctAnswer": "SETL",
    "explanation": "Python's precursor, ABC, drew inspiration from SETL."
  },
  {
    "question": "Q.When did Guido van Rossum step down from his role as BDFL of Python?",
    "options": ["July 12, 2016", "July 12, 2017", "July 12, 2018", "July 12, 2019"],
    "correctAnswer": "July 12, 2018",
    "explanation": "Guido van Rossum announced his decision to step down from the role of BDFL of the Python programming language on July 12, 2018."
  },
  {
    "question": "Q.By what year had Python become the second most popular language on GitHub?",
    "options": ["2015", "2017", "2019", "2021"],
    "correctAnswer": "2019",
    "explanation": "By 2019, Python had become the second most popular language on GitHub, trailing only JavaScript."
  },
  {
    "question": "Q.When did Python secure the number one position on the TIOBE Programming Community Index?",
    "options": ["October 2018", "October 2019", "October 2020", "October 2021"],
    "correctAnswer": "October 2021",
    "explanation": "In October 2021, Python secured the number one position on the TIOBE Programming Community Index."
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
    let allQuestionsAnswered = true;
    let correctAnswersCount = 0;

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = questions[i].userAnswer;
        const correctAnswer = questions[i].correctAnswer;
        const isCorrect = userAnswer === correctAnswer;

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

    let result = `
        <div class="score" style="font-size: 24px; color: #622569; margin-top: 20px;">
            <strong>Total Score: <span style="color: #622569;">${scoreText}</span></strong>
        </div>
        <br>
    `;

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
    }

    const resultPage = document.createElement("div");
    resultPage.classList.add("result-page");

    const resultContainer = document.createElement("div");
    resultContainer.id = "result-container";
    resultContainer.innerHTML = `
        <h2 style="font-size: 28px; color: #008000;">Quiz Results</h2>
        ${result}
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
