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
];

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

/** Initialise the game */

let score = 0;
let questionNum = 0;
let answerButtons = "#answer1, #answer2, #answer3, #answer4";

/** Main game function */
function runGame() {
    gameHTML = `<h5 id="question-number" class="card-header"></h5>
    <p class="card-body">What is the airport code for <span id="airport"></span>?</p>
    <button type="button" class="mb-2 answer btn btn-primary" id="answer1" onclick="checkAnswer(1)"></button>
    <button type="button" class="mb-2 answer btn btn-primary" id="answer2" onclick="checkAnswer(2)"></button>
    <button type="button" class="mb-2 answer btn btn-primary" id="answer3" onclick="checkAnswer(3)"></button>
    <button type="button" class="mb-2 answer btn btn-primary" id="answer4" onclick="checkAnswer(4)"></button>
    <div id="result">&nbsp;</div>
    <div id="nav-buttons">
        <button type="button" class="btn btn-dark" id="next-question">Next question</button>
    </div>
    <div id="score"><p>Current score : <span id="current-score">${score}</span> out of 10.</p></div>
    `
    $(".question-box").html("");
    $(".question-box").html(gameHTML);
    if (questionNum > 9) {
        endGame();
    } else {
        $(answerButtons).prop("disabled", false);
        $("#next-question").prop("disabled", true);
        getQuestionData(questionNum);
        displayQuestion(questionNum);
        displayAnswers(questionNum);
        nextButton();
    }
}

function endGame() {
    let resultHTML = `<h5 id="question-number" class="card-header">Game over!</h5>
<h6 class="card-body final-score"></h6>
<div id="score"></div>`;
    $(".question-box").html("");
    $(".question-box").html(resultHTML);
    if (score === 10) {
        $(".final-score").text("You are a seasoned traveller!");
    } else if (score >= 8) {
        $(".final-score").text("You have managed to land at your destination");
    } else if (score >= 6) {
        $(".final-score").text("You failed to get through customs");
    } else if (score >= 4) {
        $(".final-score").text("You didn't manage to get on the plane");
    } else if (score >= 2) {
        $(".final-score").text("You couldn't find the airport");
    } else {
        $(".final-score").text("You didn't even make it out of your front door");
    };
    $("#score").text("Your result is " + score + " out of 10");
}

function nextButton() {
    $("#next-question").click(function () {
        $("#result").text("");
        runGame();
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
        var answer = i + 1;
        var answerDiv = "answer" + answer;
        console.log("Clicked answer:" + answerDiv)
        console.log(answer);
        var answerId = "#" + answerDiv;
        $(answerId).text(answers[i]);
        // document.getElementById(answerDiv).addEventListener("click", () => checkAnswer(answerDiv, questionNum));
    }
}

/** Check if user's answer is correct */
function checkAnswer(id) {
    let answerId = "#answer" + id; 
    let answerSelected = $(answerId).text();
    let correctAnswer = questionSet[questionNum].correctAnswer;
    if (correctAnswer === answerSelected) {
        $("#result").html(`<p>Correct! Well done!</p>`)
        score = score + 1;
    } else {
        $("#result").html(`<p>Wrong, I'm afraid. The correct answer is ${correctAnswer}</p>`)
    }
    $(answerButtons).prop("disabled", true);
    $("#next-question").prop("disabled", false);
    $("#current-score").text(score);
    questionNum++;
}

