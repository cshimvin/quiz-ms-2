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

console.log(questionSet);
console.log(questionSet[1].question);
console.log(questionSet[1].correctAnswer);
console.log(questionSet[1].incorrectAnswers);

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
    document.getElementById("airport").textContent = questionSet[1].question;
    let answerSet = [].concat(questionSet[1].correctAnswer, questionSet[1].incorrectAnswers);
    let shuffledAnswers = randomise(answerSet);
    for (var i = 0; i < 4; i++)
    {
      document.getElementsByClassName('answer')[i].textContent = shuffledAnswers[i];
    }
}

runGame();