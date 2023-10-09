/** Question and answer set for the quiz **/
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

/** Array randomiser
 * taken from W3docs https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
**/
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

/** Main game function **/
function runGame() {
    let answerSet = [].concat(questionSet[7].correctAnswer, questionSet[7].incorrectAnswers);
    let shuffledAnswers = randomise(answerSet);
    displayQuestion(7);
    displayAnswers(shuffledAnswers);
}

/** Display the question destination **/
function displayQuestion(questionNum) {
    // Test question number is valid
    if (questionNum > 9 || questionNum < 0) {
        alert("Invalid question set");
        throw new Error("Question number needs to be between 0 and 9");
    } 
    document.getElementById("airport").textContent = questionSet[questionNum].question;
}

/** Display the answer options **/
function displayAnswers(answers) {
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName('answer')[i].textContent = answers[i];
    }
}

/** Check if user's answer is correct **/
function checkAnswer() {

}


runGame();