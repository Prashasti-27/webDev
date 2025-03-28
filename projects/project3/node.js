let randnum= parseInt(Math.random()*100+1);
const submit= document.querySelector('#subt')
const userinput = document.querySelector('#guessfield')
const  guessslot = document.querySelector('.Guesses')
const lastslot = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultPars')
const p =document.createElement('p');

let prevguess= []
let numGuess= 1

let playGame= true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess=  parseInt(userinput.value)
       validateGuess(guess);
    })
}
function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please add a valid number!')
    }else if(guess<1){
        alert('Please add a valid number!')
    }else if(guess>100){
        alert('Please add a valid number!')
    }else{
        prevguess.push(guess)
        if(numGuess===11){
            Displayguess(guess);
            displayMessage('Game Over!!!')
            endGame()
        }else{
            Displayguess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if(guess===randnum){
        displayMessage('You gueessed it right !!')
        endGame();
    }else if(guess<randnum){
        displayMessage('Think higher!');
    }else if(guess>randnum){
        displayMessage('Its lower.....')
    }
}
function Displayguess(guess) {
   userinput.value= '' 
   guessslot.innerHTML+= `${guess} `
   numGuess++;
   lastslot.innerHTML= `${11-numGuess}`
}


function displayMessage(msg){
    lowOrhi.innerHTML= `<h2>${msg}</h2>`
}

function endGame(){
    userinput.value= ''
    userinput.setAttribute('disabled', ' ')
    p.classList.add('button')
    p.innerHTML= `<h2 id= "newgame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    p.addEventListener('click', function(){
        newGame();
    });
   
}

function newGame(){
   const newGamebutton= document.querySelector('#newGame')
   newGamebutton.addEventListener('click', function(){
     randnum= parseInt(Math.random()*100+1);
     prevguess=[]
     numGuess=1
     guessslot.innerHTML= ''
     lastslot.innerHTML= `${11- numGuess}`
     userinput.removeAttribute('disabled')
     startOver.removeChild(p);
    playGame=true

   })
}
