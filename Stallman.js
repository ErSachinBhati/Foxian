

function startStallmanQuiz() {
    const questions = [

  {
    "question": "Q.When did Richard Stallman and Gerry Sussman publish a paper about dependency-directed backtracking?",
    "options": ["1975", "1976", "1977", "1978"],
    "correctAnswer": "1977",
    "explanation": "Richard Stallman and Gerry Sussman published a paper about dependency-directed backtracking in 1977."
  },
  {
    "question": "Q.What was one of the software projects Richard Stallman worked on at MIT?",
    "options": ["Windows OS", "GNU Bash", "TECO", "Java"],
    "correctAnswer": "TECO",
    "explanation": "One of the software projects Richard Stallman worked on at MIT was TECO."
  },
  {
    "question": "Q.Why did Richard Stallman decrypt passwords at MIT?",
    "options": ["To steal data", "To encourage anonymous access", "To sell passwords", "To destroy systems"],
    "correctAnswer": "To encourage anonymous access",
    "explanation": "Richard Stallman decrypted passwords at MIT to encourage anonymous access to systems."
  },
  {
    "question": "Q.What act influenced companies to stop sharing their software's inner workings in the late 1970s and early 1980s?",
    "options": ["The US Copyright Act of 1976", "The Digital Millennium Copyright Act", "The Communications Act of 1934", "The Computer Fraud and Abuse Act"],
    "correctAnswer": "The US Copyright Act of 1976",
    "explanation": "The US Copyright Act of 1976 influenced companies to stop sharing their software's inner workings."
  },
  {
    "question": "Q.What software did Richard Stallman create as a replacement for Scribe?",
    "options": ["LaTeX", "Markdown", "texinfo", "HTML"],
    "correctAnswer": "texinfo",
    "explanation": "Richard Stallman created texinfo as a replacement for Scribe."
  },
  {
    "question": "Q.In which year were Richard Stallman and other hackers denied access to the source code for a new laser printer?",
    "options": ["1978", "1979", "1980", "1981"],
    "correctAnswer": "1980",
    "explanation": "In 1980, Richard Stallman and other hackers were denied access to the source code for a new laser printer."
  },
  {
    "question": "Q.What was the name of the company Richard Greenblatt started?",
    "options": ["Symbolics", "Microsoft", "Lisp Machines, Inc. (LMI)", "Google"],
    "correctAnswer": "Lisp Machines, Inc. (LMI)",
    "explanation": "Richard Greenblatt started the company Lisp Machines, Inc. (LMI)."
  },
  {
    "question": "Q.What was the primary funding source for the lab where Stallman worked at MIT?",
    "options": ["DARPA", "NASA", "NSF", "IBM"],
    "correctAnswer": "DARPA",
    "explanation": "The lab where Stallman worked at MIT was primarily funded by DARPA."
  },
  {
    "question": "Q.Which company did Stallman believe was more community-friendly during the Lisp machine project disagreements?",
    "options": ["Symbolics", "Lisp Machines, Inc. (LMI)", "Microsoft", "Apple"],
    "correctAnswer": "Lisp Machines, Inc. (LMI)",
    "explanation": "Stallman believed that Lisp Machines, Inc. (LMI) was more community-friendly."
  },
  {
    "question": "Q.What was one of the reasons the hacker community Stallman was part of started to break apart?",
    "options": ["Economic recession", "New programming languages", "Software licenses and copyright", "Hardware shortages"],
    "correctAnswer": "Software licenses and copyright",
    "explanation": "The hacker community Stallman was part of started to break apart due to software licenses and copyright issues."
  },
   {
    "question": "Q.What does Richard Stallman believe software users should be able to do?",
    "options": ["Sell software", "Share, study, and modify software freely", "Use software for free", "Delete software"],
    "correctAnswer": "Share, study, and modify software freely",
    "explanation": "Richard Stallman believes that software users should be able to share, study, and modify the software they use freely."
  },
  {
    "question": "Q.When did Richard Stallman leave his job at MIT to focus on the GNU project?",
    "options": ["February 1984", "September 1983", "1985", "1990"],
    "correctAnswer": "February 1984",
    "explanation": "Richard Stallman left his job at MIT in February 1984 to focus on the GNU project."
  },
  {
    "question": "Q.What was the goal of the GNU project announced by Stallman in September 1983?",
    "options": ["To create a new programming language", "To build a free Unix-compatible operating system", "To develop hardware", "To create an office suite"],
    "correctAnswer": "To build a free Unix-compatible operating system",
    "explanation": "Stallman announced the goal of the GNU project to build a free Unix-compatible operating system in September 1983."
  },
  {
    "question": "Q.What document did Richard Stallman write in 1985 to detail his reasons for creating GNU?",
    "options": ["The Linux Manual", "The Unix Guide", "The GNU Manifesto", "The Software Freedom Manifesto"],
    "correctAnswer": "The GNU Manifesto",
    "explanation": "Richard Stallman wrote the GNU Manifesto in 1985 to detail his reasons for creating the GNU operating system."
  },
  {
    "question": "Q.Which organization did Richard Stallman found to support the GNU project?",
    "options": ["Linux Foundation", "Free Software Foundation (FSF)", "Mozilla Foundation", "Open Source Initiative"],
    "correctAnswer": "Free Software Foundation (FSF)",
    "explanation": "Richard Stallman founded the Free Software Foundation (FSF) to support the GNU project."
  },
  {
    "question": "Q.What concept did Stallman push to safeguard the rights of free software users?",
    "options": ["Shareware", "Copyleft", "Freeware", "Patent protection"],
    "correctAnswer": "Copyleft",
    "explanation": "Stallman pushed the concept of copyleft to safeguard the rights of free software users."
  },
  {
    "question": "Q.What major tool did Stallman develop for the GNU system?",
    "options": ["Linux kernel", "Microsoft Word", "GNU Emacs", "Mac OS"],
    "correctAnswer": "GNU Emacs",
    "explanation": "Stallman developed GNU Emacs as a major tool for the GNU system."
  },
  {
    "question": "Q.Which kernel did the GNU project begin using in 1990?",
    "options": ["Linux kernel", "Windows NT kernel", "Mach microkernel for GNU Hurd", "BSD kernel"],
    "correctAnswer": "Mach microkernel for GNU Hurd",
    "explanation": "In 1990, the GNU project began using Carnegie Mellon's Mach microkernel for GNU Hurd."
  },
  {
    "question": "Q.What name does Stallman insist on using to recognize the GNU project's contribution to Linux?",
    "options": ["Unix", "GNU/Linux", "GNU Hurd", "GNU Torvalds"],
    "correctAnswer": "GNU/Linux",
    "explanation": "Stallman insists on calling it GNU/Linux to recognize the GNU project's contribution."
  },
  {
    "question": "Q.Why did Richard Stallman resign from MIT and FSF in 2019?",
    "options": ["Health issues", "Retirement", "Remarks made in the context of the Jeffrey Epstein scandal", "New job offer"],
    "correctAnswer": "Remarks made in the context of the Jeffrey Epstein scandal",
    "explanation": "Richard Stallman resigned from MIT and FSF in 2019 due to remarks made in the context of the Jeffrey Epstein scandal."
  },
  {
    "question": "Q.In what year was Richard Stallman born?",
    "options": ["1950", "1951", "1952", "1953"],
    "correctAnswer": "1953",
    "explanation": "Richard Stallman was born on March 16, 1953."
  },
  {
    "question": "Q.Which organization did Richard Stallman co-found in 1989?",
    "options": ["Free Software Foundation", "League for Programming Freedom", "GNU Project", "Open Source Initiative"],
    "correctAnswer": "League for Programming Freedom",
    "explanation": "Richard Stallman co-founded the League for Programming Freedom in 1989."
  },
  {
    "question": "Q.When did Richard Stallman resign from the Free Software Foundation (FSF) and MIT?",
    "options": ["2017", "2018", "2019", "2020"],
    "correctAnswer": "2019",
    "explanation": "Richard Stallman resigned from the FSF and left MIT in September 2019."
  },
  {
    "question": "Q.Which project did Richard Stallman continue to lead after resigning from the FSF and MIT?",
    "options": ["League for Programming Freedom", "Open Source Initiative", "GNU Project", "Electronic Frontier Foundation"],
    "correctAnswer": "GNU Project",
    "explanation": "Richard Stallman continued to lead the GNU Project after his resignation."
  },
  {
    "question": "Q.What is Richard Stallman's stance on software patents and digital rights management?",
    "options": ["He supports them", "He is neutral", "He is critical of them", "He is unaware of them"],
    "correctAnswer": "He is critical of them",
    "explanation": "Richard Stallman is critical of software patents, digital rights management, and other systems that restrict user freedoms."
  },
  {
    "question": "Q.Where did Richard Stallman work as a programmer during his first year at Harvard?",
    "options": ["MIT Artificial Intelligence Laboratory", "IBM New York Scientific Center", "Rockefeller University", "Columbia University"],
    "correctAnswer": "MIT Artificial Intelligence Laboratory",
    "explanation": "During his first year at Harvard, Stallman started working as a programmer at the MIT Artificial Intelligence Laboratory."
  },
  {
    "question": "Q.What degree did Richard Stallman graduate with from Harvard University?",
    "options": ["Bachelor's in Computer Science", "Bachelor's in Mathematics", "Bachelor's in Physics", "Bachelor's in Biology"],
    "correctAnswer": "Bachelor's in Physics",
    "explanation": "Richard Stallman graduated from Harvard with a bachelor's degree in physics in 1974."
  },
  {
    "question": "Q.Which high school program did Richard Stallman attend?",
    "options": ["Yale University", "Columbia University", "Harvard University", "MIT"],
    "correctAnswer": "Columbia University",
    "explanation": "Richard Stallman attended a program at Columbia University during high school."
  },
  {
    "question": "Q.What was Richard Stallman's first real computer job?",
    "options": ["Writing a program in Fortran at the IBM New York Scientific Center", "Creating a text editor", "Developing software for Apple", "Working as a lab assistant at Rockefeller University"],
    "correctAnswer": "Writing a program in Fortran at the IBM New York Scientific Center",
    "explanation": "Richard Stallman's first real computer job was at the IBM New York Scientific Center, where he was hired to write a program in Fortran."
  },
  {
    "question": "Q.What decision did Richard Stallman make regarding his graduate studies after graduating from Harvard?",
    "options": ["Continue at Harvard", "Enroll at MIT", "Pursue a career in biology", "Join a private tech company"],
    "correctAnswer": "Enroll at MIT",
    "explanation": "After graduating from Harvard, Richard Stallman chose to enroll as a graduate student at MIT."
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
