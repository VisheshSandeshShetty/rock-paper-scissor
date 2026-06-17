function getComputerChoice(){
    let ch,rand;
    rand=Math.random();
    if(rand>0 && rand<0.33)
        ch="ROCK";
    else if(rand>0.33 && rand<0.66)
        ch="PAPER";
    else if(rand>0.66 && rand<1)
        ch="SCISSOR";
    return(ch);
}

function getHumanChoice(){
    let ch=prompt("Enter your choice: ","Rock, Paper or Scissor");
    ch=ch.toUpperCase();
    return(ch);
}

function playRound(humanSelection, computerSelection){
    let win;
    if(humanSelection=="ROCK"){
        if(computerSelection=="PAPER"){
            console.log("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="SCISSOR"){
            console.log("Human Wins.");
            win="HUMAN";
        }
        else if(computerSelection=="ROCK"){
            console.log("Draw.");
            win=null;
        }
    }
    else if(humanSelection=="PAPER"){
        if(computerSelection=="SCISSOR"){
            console.log("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="ROCK"){
            console.log("Human Wins.");
            win="HUMAN"
        }
        else if(computerSelection=="PAPER"){
            console.log("Draw.");
            win=null;
        }
    }
    else if(humanSelection=="SCISSOR"){
        if(computerSelection=="ROCK"){
            console.log("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="PAPER"){
            console.log("Human Wins.");
            win="HUMAN";
        }
        else if(computerSelection=="SCISSOR"){
            console.log("Draw.");
            win=null;
        }
    }
    else{
        console.log("Invalid Choice by Human!");
        win=null;
    }
    return(win);
}

function playGame(){
    let win;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Human's choice: ${humanSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    let winner=playRound(humanSelection, computerSelection);
    if(winner=="HUMAN")
        hscore++;
    else if(winner=="COMPUTER")
        cscore++;

    console.log(`SCORE: Human's Score: ${hscore}, Computer's Score: ${cscore}`);
    console.log("=============================================================");
    
}

let hscore=0, cscore=0;

for(let i=0;i<5;i++){
    console.log(`Round ${i+1}`);
    playGame();
}

if(hscore>cscore)
    console.log("Human is the winner!");
else if(hscore<cscore)
    console.log("Computer is the winner!");
else
    console.log("Draw");
