var scoresPlaceHold = window.localStorage.getItem("scoresPlaceholder")
var highScores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")

// Add sounds

var highscore1 = document.createElement("li");
var highscore2 = document.createElement("li");
var highscore3 = document.createElement("li");
var highscore4 = document.createElement("li");
var highscore5 = document.createElement("li");

highScores.appendChild(highscore1)
highScores.appendChild(highscore2)
highScores.appendChild(highscore3)
highScores.appendChild(highscore4)
highScores.appendChild(highscore5)

var stored = localStorage.getItem("storedScores")
var stored1 = localStorage.getItem("storedScores1")
var stored2 = localStorage.getItem("storedScores2")
var stored3 = localStorage.getItem("storedScores3")
var stored4 = localStorage.getItem("storedScores4")
var stored5 = localStorage.getItem("storedScores5")



if(stored = 1) 
{
    refreshScores()
    localStorage.setItem("storedScores",2)
    localStorage.setItem("storedScores1",scoresPlaceHold)
}
else if(stored = 2) 
{
    localStorage.setItem("storedScores",3)
    localStorage.setItem("storedScores2",scoresPlaceHold)
}
else if(stored = 3) 
{
    localStorage.setItem("storedScores",4)
    localStorage.setItem("storedScores3",scoresPlaceHold)
}
else if(stored = 4) 
{
    localStorage.setItem("storedScores",5)
    localStorage.setItem("storedScores4",scoresPlaceHold)
}
else if(stored = 5) 
{
    localStorage.setItem("storedScores",6)
    localStorage.setItem("storedScores5",scoresPlaceHold)
}


clearButton.addEventListener("click", function()
{   
    resetScores()
})


function resetScores()
{
localStorage.setItem("storedScores","dd")
localStorage.setItem("storedScores1","")
localStorage.setItem("storedScores2","")
localStorage.setItem("storedScores3","")
localStorage.setItem("storedScores4","")
localStorage.setItem("storedScores5","")

highscore1.textContent = "";
highscore2.textContent = "";
highscore3.textContent = "";
highscore4.textContent = "";
highscore5.textContent = "";
}

function refreshScores()
{
highscore1.textContent = stored1;
highscore2.textContent = stored2;
highscore3.textContent = stored3;
highscore4.textContent = stored4;
highscore5.textContent = stored5;
}