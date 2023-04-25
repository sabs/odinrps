// Simple Rock-Paper-Scissors game
// Runs in browser console

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // return random number between 0 and 2 inclusive
    // 0 rock 1 paper 2 scissors
    const random_choice = getRandomInt(3);
    switch (random_choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRoundRPS(computer_choice, player_choice) {
    displayMessage("");
    let outputstring ="Player choice " + player_choice;
    outputstring += "<br>Computer choice " + computer_choice;
    outputstring += "<br>";
    if (player_choice === computer_choice) {
        return displayMessage(outputstring + "It's a draw!");
        
    }
    if (computer_choice === "Rock") {
        if (player_choice === "Paper") {
            return displayMessage(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Scissors") {
            return displayMessage(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
        } 
    }
    if (computer_choice === "Paper") {
        if (player_choice === "Scissors") {
            return displayMessage(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Rock") {
            return displayMessage(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
        } 
    }
    if (computer_choice === "Scissors") {
        if (player_choice === "Rock") {
            return displayMessage(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Paper") {
            return displayMessage(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
        } 
    }
}

function getPlayerChoice() {
    // not used in GUI version
    const rps_values = ["Rock", "Paper", "Scissors"];
    while (true) {
        let pchoice = capitalize(prompt("Make your move: rock, paper or scissors?"));
        if (rps_values.includes(pchoice)) {
            return pchoice;
        } else {
            alert(`Did you mean to say ${pchoice}? Try again `);
        }
    }
}

function displayMessage(str) {
    document.getElementById('results').innerHTML = str;
}

function playRound(e) {
    console.log(this.innerText);
    playRoundRPS(getComputerChoice(), this.innerText);
}

function game() {

    // console.log(playRoundRPS(getComputerChoice(), getPlayerChoice()));

}

function setUpButtons() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(btn => btn.addEventListener('click', playRound)); 
}

setUpButtons();
game();