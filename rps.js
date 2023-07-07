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
    displayRoundResult("");
    let outputstring ="Player chose " + player_choice;
    outputstring += "<br>Computer chose " + computer_choice;
    outputstring += "<br>";
    if (player_choice === computer_choice) {
        return displayRoundResult(outputstring + "It's a draw!");
        
    }
    if (computer_choice === "Rock") {
        if (player_choice === "Paper") {
            updateScore('player');
            return displayRoundResult(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Scissors") {
            updateScore('computer');
            return displayRoundResult(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
        } 
    }
    if (computer_choice === "Paper") {
        if (player_choice === "Scissors") {
            updateScore('player');
            return displayRoundResult(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Rock") {
            updateScore('computer');
            return displayRoundResult(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
        } 
    }
    if (computer_choice === "Scissors") {
        if (player_choice === "Rock") {
            updateScore('player');
            return displayRoundResult(outputstring + `You win! ${player_choice} beats ${computer_choice}`);
        } else if (player_choice === "Paper") {
            updateScore('computer');
            return displayRoundResult(outputstring + `You lose! ${player_choice} is defeated by ${computer_choice}`);
            
        } 
    }
}

function updateScore(winner) {
    const winnerdiv = document.getElementById(winner);
    let score_element = winnerdiv.getElementsByClassName('score')[0];
    console.log(score_element.parentElement);
    let score = Number(score_element.innerText) + 1;
    score_element.innerText = score;

    if (score >= 5) {
        console.log('what is going on here');
        declareWinner(winner);
    } else {
        console.log('no winner yet' + (score >= 5));
        return;
    }
}

function declareWinner(winner) {
    winner = capitalize(winner); // capitalise
    
    // hide round results and buttons and add winner message
    const resultsDiv = document.getElementById('results');
    const buttons = document.getElementById('buttoncontainer');
    const winnerDiv = document.createElement('div');
    winnerDiv.id = 'winner'; 
    winnerDiv.innerText = winner + ' is the winner!';
    resultsDiv.after(winnerDiv);
    resultsDiv.style.display = 'none';
    buttons.style.display = 'none';


    // Button to start new game 
    const newGameBtn = document.createElement('button');
    newGameBtn.innerText = 'Play a new game?';
    newGameBtn.id = 'newGame';
    newGameBtn.addEventListener('click', newGame);
    winnerDiv.append(newGameBtn);
}



function displayRoundResult(str) { // TODO: rename this
    document.getElementById('results').innerHTML = str;
}

function playRound(e) {
    
    playRoundRPS(getComputerChoice(), this.textContent);
}


function newGame() {
    const winnerDiv = document.getElementById('winner');
    winnerDiv.remove();
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = 'Now starting a new game...';
    resultsDiv.style.display = 'block';

    // restore buttons
    document.getElementById('buttoncontainer').style.display = 'flex';

    // Reset score

    document.querySelectorAll('.score').forEach(elem => elem.textContent = '0')

    setUpScreen; 
}

function setUpScreen() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(btn => btn.addEventListener('click', playRound)); 
}

setUpScreen();
