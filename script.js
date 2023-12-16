// Greeting message
alert("Hello! In this simple rock paper scissors game you will play against bot. If you won, the background of handsign that you clicked will turn green. \
If you lose, color will be red. Unused handsigns will turn red too. Bot choise is displays as purple color. If it's draw, white color will appear.  \
To start the game, press \"OK\" button and choose your handsign. \
You can always restart the game by pressing f5 if something is wrong. Good luck!!!");

// DOM objects 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const conclusion = document.getElementById("choise");
const canvas = document.getElementById("confetti");
const jsConfetti = new JSConfetti();
// const choise = document.getElementById(choise);

// Game variables
let botAnswer;
let playerAnswer;
let check = false;

// Event listeners
rock.addEventListener("click", function(){
    playerAnswer = "rock";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});
paper.addEventListener("click", function(){
    playerAnswer = "paper";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});
scissors.addEventListener("click", function(){
    playerAnswer = "scissors";
    check = true;
    botAnswer = botAnswerChoise();
    compare(playerAnswer, botAnswer);
    return playerAnswer;
});

// playerAnswer logic

// function playerAnswerChoise() {
//     rock.addEventListener("click", function(){
//         playerAnswer = "rock";
//         check = true;
//         console.log(playerAnswer);
//         return playerAnswer;
//     });
//     paper.addEventListener("click", function(){
//         playerAnswer = "paper";
//         check = true;
//         return playerAnswer;
//     });
//     scissors.addEventListener("click", function(){
//         playerAnswer = "scissors";
//         check = true;
//         return playerAnswer;
//     });
// }

// botAnswer logic
function botAnswerChoise() {
    let randomNum = Math.random();

    if (randomNum <= 0.33) {
        botAnswer = "rock";
    }
    else if (randomNum > 0.33 && randomNum < 0.66) {
        botAnswer = "paper";
    }
    else if (randomNum >= 0.66) {
        botAnswer = "scissors";
    }

    return botAnswer;
}

// Game logic
function compare(playerAnswer, botAnswer) {
    if (check) {
        console.log(playerAnswer);
        if (playerAnswer == "rock" && botAnswer == "paper") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("red-background");
            paper.classList.toggle("indigo-background");
            scissors.classList.toggle("red-background");
            jsConfetti.addConfetti({
                emojis: ['😈', '🥈', '💔', '👽', '😵', '😓'],
                confettiNumber: 10, 
                emojiSize: 100,
            });
            conclusion.innerText = "Bot win this time!!!";
        }
        else if (playerAnswer == "rock" && botAnswer == "scissors") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("green-background");
            paper.classList.toggle("red-background");
            scissors.classList.toggle("indigo-background");
            jsConfetti.addConfetti({
                emojis: ['🔥', '⚡️', '🎯', '🤟', '😁', '😜'],
                confettiNumber: 13, 
                emojiSize: 100,
            }).then(() => jsConfetti.addConfetti());
            conclusion.innerText = "Player win this time!!!";
        }
        else if (playerAnswer == "paper" && botAnswer == "rock") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("indigo-background");
            paper.classList.toggle("green-background");
            scissors.classList.toggle("red-background");
            jsConfetti.addConfetti({
                emojis: ['🔥', '⚡️', '🎯', '🤟', '😁', '😜'],
                confettiNumber: 13, 
                emojiSize: 100,
            }).then(() => jsConfetti.addConfetti());
            conclusion.innerText = "Player win this time!!!";
        }
        else if (playerAnswer == "paper" && botAnswer == "scissors") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("red-background");
            paper.classList.toggle("red-background");
            scissors.classList.toggle("indigo-background");
            jsConfetti.addConfetti({
                emojis: ['😈', '🥈', '💔', '👽', '😵', '😓'],
                confettiNumber: 13, 
                emojiSize: 100,
            });
            conclusion.innerText = "Bot win this time!!!";
        }
        else if (playerAnswer == "scissors" && botAnswer == "rock") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("indigo-background");
            paper.classList.toggle("red-background");
            scissors.classList.toggle("red-background");
            jsConfetti.addConfetti({
                emojis: ['😈', '🥈', '💔', '👽', '😵', '😓'],
                confettiNumber: 13, 
                emojiSize: 100,
            });
            conclusion.innerText = "Bot win this time!!!";
        }
        else if (playerAnswer == "scissors" && botAnswer == "paper") {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("red-background");
            paper.classList.toggle("indigo-background");
            scissors.classList.toggle("green-background");
            jsConfetti.addConfetti({
                emojis: ['🔥', '⚡️', '🎯', '🤟', '😁', '😜'],
                confettiNumber: 13, 
                emojiSize: 100,
            }).then(() => jsConfetti.addConfetti());
            conclusion.innerText = "Player win this time!!!";
        }
        else {
            rock.className = "";
            paper.className = "";
            scissors.className = "";
            rock.classList.toggle("white-background");
            paper.classList.toggle("white-background");
            scissors.classList.toggle("white-background");
            jsConfetti.addConfetti({
                emojis: ['👏', '🤝', '😐', '👀', '🐸', '🏳️'],
                confettiNumber: 13, 
                emojiSize: 100,
            });
            conclusion.innerText = "Oh!!! Looks like a draw right here!!!";
        }
    }
}

// Confetti logic




// function calling











