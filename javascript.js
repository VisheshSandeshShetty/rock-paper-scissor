const container = document.querySelector("#container");

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

function playRound(humanSelection, computerSelection){
    let win;
    if(humanSelection=="ROCK"){
        if(computerSelection=="PAPER"){
            alert("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="SCISSOR"){
            alert("Human Wins.");
            win="HUMAN";
        }
        else if(computerSelection=="ROCK"){
            alert("Draw.");
            win=null;
        }
    }
    else if(humanSelection=="PAPER"){
        if(computerSelection=="SCISSOR"){
            alert("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="ROCK"){
            alert("Human Wins.");
            win="HUMAN"
        }
        else if(computerSelection=="PAPER"){
            alert("Draw.");
            win=null;
        }
    }
    else if(humanSelection=="SCISSOR"){
        if(computerSelection=="ROCK"){
            alert("Computer wins.");
            win="COMPUTER";
        }
        else if(computerSelection=="PAPER"){
            alert("Human Wins.");
            win="HUMAN";
        }
        else if(computerSelection=="SCISSOR"){
           alert("Draw.");
            win=null;
        }
    }
    return(win);
}

function playGame(HumanChoice){
    let win;

    const humanSelection = HumanChoice;
    const computerSelection = getComputerChoice();

    const hchoice=document.querySelector('#hchoice');
    hchoice.style.color='blue';
    hchoice.textContent=`Human's choice: ${humanSelection}`;
    container.appendChild(hchoice);
    const cchoice=document.querySelector('#cchoice');
    cchoice.style.color='blue';
    cchoice.textContent=`Computers's choice: ${computerSelection}`;
    container.appendChild(cchoice);

    let winner=playRound(humanSelection, computerSelection);
    if(winner=="HUMAN")
        hscore++;
    else if(winner=="COMPUTER")
        cscore++;

    const score=document.querySelector("#score");
    score.style.color='red';
    score.textContent=`SCORE: Human's Score: ${hscore}, Computer's Score: ${cscore}`;
    console.log(`SCORE: Human's Score: ${hscore}, Computer's Score: ${cscore}`);
    console.log("=============================================================");
}

let ch=null;
let hscore=0, cscore=0;
const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        if(hscore>=5 || cscore>=5){
            return;
        }
        if(button.id=='rock')
            ch="ROCK";
        else if(button.id=='paper')
            ch="PAPER";
        else if(button.id=='scissor')
            ch="SCISSOR";
        playGame(ch);

        const winner=document.createElement('h1');
        winner.style.color='green';
        if(hscore>=5){
            winner.textContent="Human is the winner!";
            container.appendChild(winner);
        }else if(cscore>=5){
            winner.textContent="Computer is the winner!";
            container.appendChild(winner);
        }
    })
})
