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
    console.log("Player choice " + player_choice);
    console.log("Computer choice " + computer_choice);
    if (player_choice === computer_choice) {
        return "It's a draw!";
    }
    if (computer_choice === "Rock") {
        if (player_choice === "Paper") {
            return `You win! ${player_choice} beats ${computer_choice}`;
        } else if (player_choice === "Scissors") {
            return `You lose! ${player_choice} is defeated by ${computer_choice}`;
        } 
    }
    if (computer_choice === "Paper") {
        if (player_choice === "Scissors") {
            return `You win! ${player_choice} beats ${computer_choice}`;
        } else if (player_choice === "Rock") {
            return `You lose! ${player_choice} is defeated by ${computer_choice}`;
        } 
    }
    if (computer_choice === "Scissors") {
        if (player_choice === "Rock") {
            return `You win! ${player_choice} beats ${computer_choice}`;
        } else if (player_choice === "Paper") {
            return `You lose! ${player_choice} is defeated by ${computer_choice}`;
        } 
    }
}

function getPlayerChoice() {
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

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRoundRPS(getComputerChoice(), getPlayerChoice()));
    }
}

game();