
var startButton = document.querySelector("#start")
var startScreen = document.querySelector("#start-screen")
var questionScreen = document.querySelector("#questions")
var endScreen = document.querySelector("#end-screen")
var timer = document.querySelector("#time")

var questionTitle = document.querySelector("#question-title")
var choicesArea = document.querySelector("#choices")

var finalScore = document.querySelector("#final-score")
var submitButton = document.querySelector("#submit")


var awnserlist = document.createElement("ol");
var awnser1 = document.createElement("button");
var awnser2 = document.createElement("button");
var awnser3 = document.createElement("button");
var awnser4 = document.createElement("button");

awnserlist.appendChild(awnser1)
awnserlist.appendChild(awnser2)
awnserlist.appendChild(awnser3)
awnserlist.appendChild(awnser4)
choicesArea.appendChild(awnserlist)


var playerscore = 0;
var time = 75;
var timerInterval;
var scoreTextOut = "";

//Timer function
function Timer()
{
    timerInterval = setInterval(function()
    {
        time--;
        timer.textContent = time;
        if(time == 0)
        {
            clearInterval(timerInterval);
            TriggerEndScreen()
        }
    },1000
    );
}

//Start screen button listener
startButton.addEventListener("click", function()
{
    startScreen.textContent = "";
    StartQuestions()   
})


currentlyStored = localStorage.getItem("CurrentlyStored","")

//End screen submit button listener
submitButton.addEventListener("click", function()
{   
    scoreTextOut = document.getElementById('initials').value+ " "+playerscore
    if(currentlyStored == 0)
    {
        console.log("1")
        localStorage.setItem("CurrentlyStored",1)
        localStorage.setItem("storedScores1",scoreTextOut)
    }
    if(currentlyStored == 1)
    {
        console.log("2")
        localStorage.setItem("CurrentlyStored",2)
        localStorage.setItem("storedScores2",scoreTextOut)
    }
    if(currentlyStored == 2)
    {
        console.log("3")
        localStorage.setItem("CurrentlyStored",3)
        localStorage.setItem("storedScores3",scoreTextOut)
    }
    if(currentlyStored == 3)
    {
        console.log("4")
        localStorage.setItem("CurrentlyStored",4)
        localStorage.setItem("storedScores4",scoreTextOut)
    }
    if(currentlyStored == 4)
    {
        console.log("5")
        localStorage.setItem("CurrentlyStored",5)
        localStorage.setItem("storedScores5",scoreTextOut)
    }
    if(currentlyStored == 5)
    {
        alert("HighScore storage full, max 5")
    }

})


var counter = 0;

//Start question function
function StartQuestions()
{
    Timer() ;
    PropegateAwnsers(counter);

    questionScreen.setAttribute("class","");

    choicesArea.addEventListener("click", function(event)
    {
        var element = event.target;
        if(element.textContent == questions[counter].correctAwnser)
        {
            if(counter < questions.length-1)
            {
                time +=15;
                counter ++;
                PropegateAwnsers(counter);
            }
            else
            {
                TriggerEndScreen();
                clearInterval(timerInterval);
            }
        }
        if(element.textContent != questions[counter].correctAwnser)
        {          
            if(counter < questions.length-1)
            {
                time -=15;
                counter ++;
                PropegateAwnsers(counter)
            }
            else
            {
                TriggerEndScreen();
                clearInterval(timerInterval);
            }
        }
        })
    
}

//Add awnsers to screen function
function PropegateAwnsers(i)
{
    questionTitle.textContent = questions[i].questionText;
    awnser1.textContent = questions[i].awnsers[0];
    awnser2.textContent = questions[i].awnsers[1];
    awnser3.textContent = questions[i].awnsers[2];
    awnser4.textContent = questions[i].awnsers[3];
}

// Function to trigger end screen
function TriggerEndScreen()
{
    questionScreen.setAttribute("class","hide");
    endScreen.setAttribute("class","");
    finalScore.textContent = "Your final score is " + time;
    playerscore = time;
}