// Number Guessing Game

const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max-min + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} and ${max}.`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number!");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too low!");
        }
        else if(guess>answer){
            window.alert("Too high!");
        }
        else{
            window.alert(`That's the correct answer.\nIt took you ${attempts} attempts to get it right!`);
            running = false;
        }
    }

}


