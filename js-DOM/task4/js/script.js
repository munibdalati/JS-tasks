//create heading
const heading = document.createElement("h1")
heading.textContent  = "Use a Test Score array"
document.body.appendChild(heading)
heading.style = "color:blue"

//create name
const name = document.createElement("p")
name.textContent  = "Name: "
document.body.appendChild(name)

//create name input box
const nameInput = document.createElement("input")
nameInput.type = "text"
nameInput.id = 'nameInput';
nameInput.placeholder = 'Enter a name'; 
const nameInputValue = nameInput.value
let nameVariable = nameInputValue;
window.addEventListener('load', function() {
document.getElementById('nameInput').focus();
});
name.append(nameInput)

//create score
const score = document.createElement("p")
score.textContent  = "Score: "
document.body.appendChild(score)

//create score input box
const scoreInput = document.createElement("input")
scoreInput.type = "text"
scoreInput.id = 'scoreInput';
scoreInput.placeholder = 'Enter a score';
const scoreInputValue = nameInput.value
let scoreVariable = scoreInputValue;
score.append(scoreInput)


//create buttons
const buttons = document.createElement("div")
document.body.appendChild(buttons)
const addArraybtn = document.createElement("button")
buttons.style = "margin-left : 45px; display:flex; gap:10px"

//Add to arrays
addArraybtn.textContent = "Add to Array"
addArraybtn.addEventListener('click', function() {})
buttons.appendChild(addArraybtn)

addArraybtn.addEventListener('click', function(){
  addScore()


})


//Results
const resultBtn = document.createElement("button")
resultBtn.textContent = "Display Results"
resultBtn.addEventListener('click', function() {})
buttons.appendChild(resultBtn)

resultBtn.addEventListener('click', function() {
  nameInput.value=""
  scoreInput.value=""
})



//Scores
const scoreBtn = document.createElement("button")
scoreBtn.textContent = "Display Scores"
scoreBtn.addEventListener('click', function() {})
buttons.appendChild(scoreBtn)

scoreBtn.addEventListener('click', function() {})


// end of buttons

//create Results title
const resultTitle = document.createElement("h2")
resultTitle.textContent  = "Results"
document.body.appendChild(resultTitle)
resultTitle.style = "color:blue"


//Arrays
let nameArr = ["Ben", "Joel", "Judy", "Anne", "Mike"]
let ScoreArr = [88, 98, 77, 88, 99]

//functions
function displayResults(){
  let sum = 0
  let highest = ScoreArr[0]
  for (i=0; i<ScoreArr.length; i++){
    sum = sum + ScoreArr[i]
    if (ScoreArr[i]>highest){
      highest = ScoreArr[i]
    }
  }
  let averge = sum/ScoreArr.length
  return [averge, highest] 
}

function  displayScores(){
  for (let i = 0; i < nameArr.length; i++) {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    nameCell.textContent = nameArr[i];
    const scoreCell = row.insertCell(1);
    scoreCell.textContent = ScoreArr[i];
  }
}

function addScore(){
  if (nameInput.value=="" || scoreInput.value > 100 || scoreInput.value < 0){
    alert("You must enter a name and a valid score")
  }
  nameArr.push(nameInput.value);
  ScoreArr.push(scoreInput.value);
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  nameCell.textContent = nameInput.value;
  const scoreCell = row.insertCell(1);
  scoreCell.textContent = scoreInput.value;


}


// results content
const averageResult = document.createElement("p")
averageResult.textContent  =
"Average score = " + displayResults()[0]
document.body.appendChild(averageResult)

const highestResult = document.createElement("p")
highestResult.textContent  =
"High score = Mike with a score of " + displayResults()[1]
document.body.appendChild(highestResult)



//create Scores title
const scoreTitle = document.createElement("h2")
scoreTitle.textContent  = "Scores"
document.body.appendChild(scoreTitle)
scoreTitle.style = "color:blue"

//Create the table
const table = document.createElement("table")
const titleRow = table.insertRow();
const namesTitle = titleRow.insertCell(0);
namesTitle.textContent = "Names";
const scoresTitle = titleRow.insertCell(1);
scoresTitle.textContent = "Scores";
document.body.appendChild(table) 

//calling score function
displayScores()


