 
function startlinusQuiz() {
    const questions = [
          {
    "question": "Q.What is Linus Torvalds renowned for creating?",
    "options": ["The Unix operating system", "The Linux kernel", "The Windows operating system", "The Android operating system"],
    "correctAnswer": "The Linux kernel",
    "explanation": "Linus Torvalds is renowned for creating the Linux kernel, which is a fundamental component of the Linux operating system."
  },
  {
    "question": "Q.Besides the Linux kernel, what other major software development tool did Linus Torvalds develop?",
    "options": ["Subversion", "Mercurial", "Git", "Perforce"],
    "correctAnswer": "Git",
    "explanation": "Linus Torvalds also developed Git, a distributed version control system crucial for modern software development."
  },
  {
    "question": "Q.In what year was Linus Torvalds co-awarded the Millennium Technology Prize?",
    "options": ["2010", "2012", "2014", "2016"],
    "correctAnswer": "2012",
    "explanation": "Torvalds was co-awarded the Millennium Technology Prize in 2012 by the Technology Academy Finland."
  },
  {
    "question": "Q.With whom did Linus Torvalds share the Millennium Technology Prize in 2012?",
    "options": ["Tim Berners-Lee", "Shinya Yamanaka", "Steve Jobs", "Bill Gates"],
    "correctAnswer": "Shinya Yamanaka",
    "explanation": "Linus Torvalds shared the Millennium Technology Prize in 2012 with Shinya Yamanaka."
  },
  {
    "question": "Q.Which award did Linus Torvalds receive from the IEEE Computer Society in 2014?",
    "options": ["IEEE Masaru Ibuka Consumer Electronics Award", "IEEE Computer Society Computer Pioneer Award", "IEEE Hamming Medal", "IEEE Medal of Honor"],
    "correctAnswer": "IEEE Computer Society Computer Pioneer Award",
    "explanation": "Torvalds received the IEEE Computer Society Computer Pioneer Award in 2014."
  },
  {
    "question": "Q.What is the name of the award Linus Torvalds received in 2018?",
    "options": ["IEEE Masaru Ibuka Consumer Electronics Award", "IEEE John von Neumann Medal", "IEEE Founders Medal", "IEEE Edison Medal"],
    "correctAnswer": "IEEE Masaru Ibuka Consumer Electronics Award",
    "explanation": "In 2018, Torvalds received the IEEE Masaru Ibuka Consumer Electronics Award."
  },
  {
    "question": "Q.What were the professions of Linus Torvalds' parents?",
    "options": ["Engineers", "Doctors", "Lawyers", "Journalists"],
    "correctAnswer": "Journalists",
    "explanation": "Linus Torvalds' parents, Anna and Nils Torvalds, were both journalists."
  },
  {
    "question": "Q.Which university did Linus Torvalds' parents attend during the 1960s?",
    "options": ["University of Turku", "University of Helsinki", "Aalto University", "University of Oulu"],
    "correctAnswer": "University of Helsinki",
    "explanation": "Torvalds' parents were active on campus during their time at the University of Helsinki in the 1960s."
  },
  {
    "question": "Q.From which minority community in Finland does Linus Torvalds come from?",
    "options": ["Finnish-speaking", "Sami-speaking", "Swedish-speaking", "Russian-speaking"],
    "correctAnswer": "Swedish-speaking",
    "explanation": "Linus Torvalds grew up in a Swedish-speaking minority community in Finland."
  },
  {
    "question": "Q.Which field of study is not mentioned as a background in Linus Torvalds' family?",
    "options": ["Statistics", "Poetry", "Journalism", "Medicine"],
    "correctAnswer": "Medicine",
    "explanation": "Linus Torvalds' family has a background in statistics, poetry, journalism, and military service, but not medicine."
  },
  
    {
    "question": "Q.At what age did Linus Torvalds develop an interest in computers?",
    "options": ["9", "11", "13", "15"],
    "correctAnswer": "11",
    "explanation": "Linus Torvalds' interest in computers sparked at the age of 11 when he got his hands on a VIC-20 in 1981."
  },
  {
    "question": "Q.Which programming language did Linus Torvalds initially start with on his VIC-20?",
    "options": ["C", "Python", "BASIC", "Java"],
    "correctAnswer": "BASIC",
    "explanation": "Linus began programming in BASIC on his VIC-20."
  },
  {
    "question": "Q.What book introduced Linus Torvalds to MINIX, a simplified version of Unix?",
    "options": ["The C Programming Language", "Operating Systems: Design and Implementation", "The Art of Computer Programming", "Structure and Interpretation of Computer Programs"],
    "correctAnswer": "Operating Systems: Design and Implementation",
    "explanation": "Linus Torvalds was introduced to MINIX through Andrew Tanenbaum's book 'Operating Systems: Design and Implementation'."
  },
  {
    "question": "Q.What was the title of Linus Torvalds' master's thesis?",
    "options": ["The Development of Linux", "Unix for Beginners", "Linux: A Portable Operating System", "Operating Systems and Their Design"],
    "correctAnswer": "Linux: A Portable Operating System",
    "explanation": "Linus Torvalds' master's thesis was titled 'Linux: A Portable Operating System'."
  },
  {
    "question": "Q.In what year did Linus Torvalds begin working on what would become Linux?",
    "options": ["1989", "1990", "1991", "1992"],
    "correctAnswer": "1991",
    "explanation": "It was in 1991, shortly after purchasing an Intel 80386-based clone of IBM PC, that Linus Torvalds began working on what we now know as Linux."
  },
  {
    "question": "Q.Which computer did Linus Torvalds extensively modify by writing his own assembler, editor, and games?",
    "options": ["Commodore 64", "Amiga 500", "Sinclair QL", "Atari ST"],
    "correctAnswer": "Sinclair QL",
    "explanation": "Linus extensively modified a Sinclair QL, writing his own assembler, editor, and even some games due to the scarcity of software in Finland."
  },
  {
    "question": "Q.Where did Linus Torvalds serve as an artillery observer during his mandatory military service?",
    "options": ["Finnish Navy", "Finnish Army", "Finnish Air Force", "Finnish Border Guard"],
    "correctAnswer": "Finnish Navy",
    "explanation": "Linus Torvalds served in the Finnish Navy as an artillery observer during his mandatory military service."
  },
  {
    "question": "Q.What kind of computer was running ULTRIX that exposed Torvalds to Unix?",
    "options": ["IBM PC", "DEC MicroVAX", "Commodore Amiga", "Apple II"],
    "correctAnswer": "DEC MicroVAX",
    "explanation": "Linus Torvalds was exposed to Unix through a DEC MicroVAX running ULTRIX."
  },
  {
    "question": "Q.From which university did Linus Torvalds graduate with a master's degree in computer science?",
    "options": ["Aalto University", "University of Helsinki", "University of Turku", "University of Oulu"],
    "correctAnswer": "University of Helsinki",
    "explanation": "Linus Torvalds graduated from the University of Helsinki in 1996 with a master's degree in computer science."
  },
  {
    "question": "Q.What computer did Linus Torvalds purchase that led him to start developing Linux?",
    "options": ["IBM PC", "Apple Macintosh", "Intel 80386-based clone of IBM PC", "Commodore 64"],
    "correctAnswer": "Intel 80386-based clone of IBM PC",
    "explanation": "Linus Torvalds began working on what would become Linux shortly after purchasing an Intel 80386-based clone of IBM PC in 1991."
  },
  
  {
    "question": "Q.Which company did Linus Torvalds join in California from February 1997 to June 2003?",
    "options": ["Microsoft", "Transmeta", "IBM", "Google"],
    "correctAnswer": "Transmeta",
    "explanation": "Torvalds joined Transmeta in California from February 1997 to June 2003."
  },
  {
    "question": "Q.To which organization did Linus Torvalds move after leaving Transmeta in 2003?",
    "options": ["Microsoft", "Open Source Development Labs", "Apple", "Google"],
    "correctAnswer": "Open Source Development Labs",
    "explanation": "After leaving Transmeta in 2003, Torvalds moved to the Open Source Development Labs, which later became part of the Linux Foundation."
  },
  {
    "question": "Q.What was the purpose of the 86open project that Torvalds was involved in from 1997 to 1999?",
    "options": ["Developing a new programming language", "Creating a web browser", "Establishing standard binary formats for Linux and Unix", "Designing a new operating system"],
    "correctAnswer": "Establishing standard binary formats for Linux and Unix",
    "explanation": "Torvalds was involved in the 86open project, which aimed to establish standard binary formats for Linux and Unix."
  },
  {
    "question": "Q.In which year was Linus Torvalds recognized by the MIT Technology Review TR100?",
    "options": ["1997", "1998", "1999", "2000"],
    "correctAnswer": "1999",
    "explanation": "Torvalds was recognized by the MIT Technology Review TR100 in 1999 as one of the top 100 innovators under age 35."
  },
  {
    "question": "Q.What mascot is widely embraced by the Linux community as the symbol of the Linux kernel?",
    "options": ["Eagle", "Penguin", "Lion", "Elephant"],
    "correctAnswer": "Penguin",
    "explanation": "Torvalds's personal mascot is a penguin named Tux, which is widely embraced by the Linux community as the symbol of the Linux kernel."
  },
  {
    "question": "Q.What alternative to the proprietary BitKeeper software did Torvalds develop for version control?",
    "options": ["Mercurial", "Git", "Subversion", "Perforce"],
    "correctAnswer": "Git",
    "explanation": "Torvalds developed Git as a free-software alternative to the proprietary BitKeeper software for version control."
  },
  {
    "question": "Q.What sport was Tove Torvalds, Linus Torvalds's wife, a champion in?",
    "options": ["Swimming", "Tennis", "Karate", "Gymnastics"],
    "correctAnswer": "Karate",
    "explanation": "Tove Torvalds, Linus's wife, was a former Finnish national karate champion."
  },
  {
    "question": "Q.In which year did Linus Torvalds become a United States citizen?",
    "options": ["2008", "2010", "2012", "2014"],
    "correctAnswer": "2010",
    "explanation": "Linus Torvalds became a United States citizen in 2010."
  },
  {
    "question": "Q.Which hobby did Torvalds develop an interest in during the early 2000s, leading him to create the Subsurface project?",
    "options": ["Hiking", "Scuba diving", "Cycling", "Photography"],
    "correctAnswer": "Scuba diving",
    "explanation": "Torvalds developed an interest in scuba diving in the early 2000s and created the Subsurface project."
  },
  {
    "question": "Q.Where did Linus Torvalds relocate to in June 2004 to be closer to the Linux Foundation's headquarters?",
    "options": ["Silicon Valley", "Seattle", "New York", "Dunthorpe, Oregon"],
    "correctAnswer": "Dunthorpe, Oregon",
    "explanation": "Torvalds relocated to Dunthorpe, Oregon, in June 2004 to be closer to the Linux Foundation's headquarters."
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
