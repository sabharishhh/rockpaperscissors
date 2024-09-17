let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const usrScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");

const generateCompChoice = () => {
    // rock, paper, scissors -> random selectn.

    const options = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);

    return options[randIndex];
}

const drawGame = () => {
    console.log('game was a draw');
    msg.innerText = "Draw! Play Again";

    msg.style.backgroundColor = '#F3CA40';  
}

const showWinner = (userWin, userChoice, computerChoice) => {
    userChoice = userChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (userWin) {
        console.log('You win');

        userScore++;
        usrScr.innerText = userScore;

        msg.innerText = `You Win!, ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = '#2bce4e';
    } else {
        console.log('You lose');

        compScore++;
        compScr.innerText = compScore;

        msg.innerText = `You Lose. ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = '#FF495C';
    }
}

const playGame = (userChoice) => {
    console.log('user choice: ' + userChoice);

    // generate comp choice:
    const computerChoice = generateCompChoice();
    console.log('computer choice: ', computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }   else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }   else {
            userWin  = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
})