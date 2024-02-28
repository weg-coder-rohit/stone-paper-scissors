let cflag = 0;
let pflag = 0;
let rounds = 5;


function playRound() {
    const str = ["Rock", "Paper", "Scissor"];
    function getComputerChoice() {
        let randomnum = Math.floor(Math.random() * str.length);
        return str[randomnum];
    }
    let computerSelection = getComputerChoice();
    var playerSelection = prompt("write one, Rock or Paper or Scissor");
    console.log(`computer selected ${computerSelection}`)
    console.log(`Plater enterd ${playerSelection}`);
    csel = computerSelection.toLowerCase();
    psel = playerSelection.toLowerCase();
    if (csel === "rock" && psel === "paper"){
        pflag += 1;
        console.log(`Player Wins! ${psel} beats ${csel}`);
    }
    else if (csel === "paper" && psel === "scissor") {
        pflag += 1;
        console.log(`Player Wins! ${psel} beats ${csel}`);
    }

    else if (csel === "scissor" && psel === "rock") {
        pflag += 1;
        console.log(`Player Wins! ${psel} beats ${csel}`);
    }

    else if (csel === "rock" && psel === "scissor")  {
        console.log(`Computer Wins! ${csel} beats ${psel}`);
        cflag += 1;
        
    }
    else if (csel === "paper" && psel === "rock") {
        cflag += 1;
        console.log(`Computer Wins! ${csel} beats ${psel}`);
    }

    else if (csel === "scissor" && psel === "paper") {
        cflag += 1;
        console.log(`Computer Wins! ${csel} beats ${psel}`);
    }
    else {
        console.log(`Draw ${csel} and ${psel}`);
        
    }
    console.log(`Computer score: ${cflag}, Player Score: ${pflag}`);
    return [cflag, pflag];
}

let flag = 0;

function playGame() {
    for (i = 0; i < rounds; i++) {
        flag =  playRound();
    }
    return flag;
}


flag = playGame();
whowon(flag)
function whowon(flag) {

    if (flag[0] > flag[1]) {
        console.log("computer Wins")
    }
    else if (flag[0] === flag[1]) {
        console.log("Draw")
    }
    else {
        console.log("Player Wins")
    }
}
