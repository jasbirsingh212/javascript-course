// @ts-nocheck
'use strict';

const handleDiceImage = (number) => {

    switch(number){
        case 1 : return "./dice-1.png"
        case 2 : return "./dice-2.png"
        case 3 : return "./dice-3.png"
        case 4 : return "./dice-4.png"
        case 5 : return "./dice-5.png"
        case 6 : return "./dice-6.png"
    }

}
let finished = false;
const imageElement = document.querySelector('.dice')

const handleHideDisplayImage = () => {
    imageElement.classList.add('hide')
}

const handleDisplayImage = () => {
    imageElement.classList.remove('hide')
}

const handleShowDiceImage = (src) => {
    handleDisplayImage()
    imageElement.src = src;
}

const handleActivePlayer = () => {

   return document.querySelector('.player--active')
}

const handleSwitchUser = () => {
    const players = document.querySelectorAll('.player');
    players.forEach((item) => {
        if(!(item.classList.contains('player--active'))){
                item.classList.add('player--active')
            }
            else{
                item.classList.remove('player--active')
            }
    } )
    
   
}

const handleWinner = (activePlayer) => {
    activePlayer.classList.add('player--winner')
}

const setScore = ( activePlayer,  number ) => {

    const scoreElement = activePlayer.querySelector('.current-score');
    let score = Number(scoreElement.innerHTML);
    score+=number;
    if(number === 0) score=0
    scoreElement.innerHTML = String(score);

    if(score >= 100){
     handleWinner(activePlayer)
     handleHideDisplayImage()
     finished=true
     return 
    }

}

const handleActivePlayerScore = (number) => {

    let activePlayer = handleActivePlayer();
    if(number === 1){
       // @ts-ignore
       setScore(activePlayer , 0)
       handleSwitchUser();
    }
    else{

       setScore(activePlayer, number)
    }
}

const handleHoldDice = () => {

    if(finished) return
    const activePlayer = handleActivePlayer()
    const scoreElement = activePlayer.querySelector('.current-score');
    let score = Number(scoreElement.innerHTML);
    const activePlayerScoreElement =  activePlayer.querySelector('.score')
    let activePlayerScore = Number(activePlayerScoreElement.innerHTML)
    activePlayerScore += score
    activePlayerScoreElement.innerHTML = String(activePlayerScore)
    if(activePlayerScore >= 100){
        handleWinner(activePlayer)
        handleHideDisplayImage()
        finished = true
        return 
    }
    scoreElement.innerHTML="0"
    handleSwitchUser()
}

const handleRollDice = () => {

   if(finished) return 
   const number = Math.trunc((Math.random()*6)+1);
   const imageSrc= handleDiceImage(number)
   handleShowDiceImage(imageSrc);
   handleActivePlayerScore(number)
}

const handleNewDice = () => {
    const players = document.querySelectorAll('.player');
    players.forEach((item) => {
        item.querySelector('.score').innerHTML = "0"
        item.querySelector('.current-score').innerHTML = "0"
        if(item.classList.contains('player--winner')){
            item.classList.remove('player--winner')
        }

        if(item.classList.contains('player--active')){
            item.classList.remove('player--active')
        }else{
            item.classList.add('player--active')
        }
    } )
    
    imageElement.classList.add('hide')
    finished=false
}

const rollDice = document.querySelector('.btn--roll');
rollDice.addEventListener('click', handleRollDice);
const holdDice = document.querySelector('.btn--hold');
holdDice.addEventListener('click', handleHoldDice);
const newRoll = document.querySelector('.btn--new');
newRoll.addEventListener('click', handleNewDice);