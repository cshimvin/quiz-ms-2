/** Question and answer set for the quiz */
const questionSet = [
    {question: "Toronto",
    correctAnswer: "YYZ",
    incorrectAnswers: ["TOR", "YVR", "TRN"]},
    {question: "Cardiff",
    correctAnswer: "CWL",
    incorrectAnswers: ["CDF", "CAR", "CFF"]},
    {question: "Bristol",
    correctAnswer: "BRS",
    incorrectAnswers: ["BRI", "BTL", "BST"]},
    {question: "Malaga",
    correctAnswer: "AGP",
    incorrectAnswers: ["MAL", "MGA", "YUL"]},
    {question: "Sydney",
    correctAnswer: "SYD",
    incorrectAnswers: ["SDN", "SDY", "SDA"]},
    {question: "Washington DC",
    correctAnswer: "IAD",
    incorrectAnswers: ["IAW", "WAS", "WDC"]},
    {question: "Copenhagen",
    correctAnswer: "CPH",
    incorrectAnswers: ["COP", "CGN", "CPN"]},
    {question: "Los Angeles",
    correctAnswer: "LAX",
    incorrectAnswers: ["LAS", "LOS", "LOA"]},
    {question: "London Heathrow",
    correctAnswer: "LHR",
    incorrectAnswers: ["LON", "LDN", "LHW"]},
    {question: "Birmingham",
    correctAnswer: "BHX",
    incorrectAnswers: ["BHM", "BIR", "BGM"]},
]

/** Shuffle answer order - Array randomiser
 * taken from W3docs https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
*/
function randomise(values) {
    let index = values.length,
    randomIndex;
    // While there remain elements to shuffle.
    while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;
      // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
    return values;
}

/** Main game function */
function runGame() {
    let score = 0;
    let questionNum = 0;
    getQuestionData(questionNum);
    displayQuestion(questionNum);
    displayAnswers(questionNum);
    $("#answer1, #answer2, #answer3, #answer4").click(function () {
        checkAnswer(this.id);
    });
}

/** Get question data from object */
function getQuestionData(questionNum) {
    questionIsValid(questionNum);
    let answerSet = [].concat(questionSet[questionNum].correctAnswer, questionSet[questionNum].incorrectAnswers);
    let shuffledAnswers = randomise(answerSet);
    displayQuestion(questionNum);
    displayAnswers(shuffledAnswers);
}

/** Display the question destination */
function displayQuestion(questionNum) {
    questionIsValid(questionNum);
    $("#question-number").text(`Question number ${questionNum+1}`);
    $("#airport").text(questionSet[questionNum].question);
}

/** Test question number is valid */
function questionIsValid(questionNum) {
    if (questionNum > 9 || questionNum < 0) {
    alert("Invalid question set");
    throw new Error("Question number needs to be between 0 and 9");
    }
}

/** Display the answer options */
function displayAnswers(answers) {
    for (var i = 0; i < 4; i++) {
        var answerId = i+1;
        var answerDiv = "#answer" + answerId;
        $(answerDiv).text(answers[i]);
    }
}

/** Check if user's answer is correct */
function checkAnswer(id) {
    let answerSelected = "#" + id;
    alert($(answerSelected).text())
}

runGame();