buttons = document.querySelectorAll('.cell');
let clickCount = 0;
buttons.forEach(button => {
    button.addEventListener('click', e => {
        startGame(e)
    })
})

resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetAll)

// winning conditions 123, 456, 789, 147, 258, 369, 159, 357
let player1Responses = '';
let player2Responses = '';

function startGame(e) {
    let buttonId = e.target.id;
    clickCount++;
    let checkCounter = checkClickCounter();
    makeResetButtonAppearDisappear(checkCounter)
    if (clickCount % 2 !== 0) {
        insertX(buttonId);
        player1Responses += buttonId;
        let player1IsWinner = checkWinner(player1Responses);
        if(player1IsWinner){
            disableAllButtons()
            makeResetButtonAppearDisappear(true)
            declareWinner('Player 1')
        }
    } else {
        insertO(buttonId)
        player2Responses += buttonId;
        let player2IsWinner = checkWinner(player2Responses)
        if(player2IsWinner){
            disableAllButtons()
            makeResetButtonAppearDisappear(true)
            declareWinner('Player 2')
        }
    }
    
}
function insertX(buttonId) {
    document.getElementById(buttonId).innerText = "X";
    document.getElementById(buttonId).disabled = true;
}
function insertO(buttonId) {
    document.getElementById(buttonId).innerText = "O"
    document.getElementById(buttonId).disabled = true;
}

function disableAllButtons(){
    buttons.forEach(button =>{
        button.disabled = true;
    })
}

function resetAll() {
    buttons.forEach(button => {
        button.innerText = '';
        button.disabled = false;
        button.style.backgroundColor = '';
        document.getElementById('winnerName').style.visibility = 'hidden'
        document.getElementById('winnerName').classList.remove('animate','bounceInLeft')
        resetButton.classList.remove('animate','flipInX')
        clickCount = 0;
        player1Responses = '';
        player2Responses = '';
    })
}
function checkClickCounter() {
    if (clickCount === 9) {
        return true;
    } else {
        return false;
    }
}
function makeResetButtonAppearDisappear(checkCounter) {
    if (checkCounter) {
        resetButton.style.visibility = "visible"
        resetButton.classList.add('animate','flipInX')

    } else {
        resetButton.style.visibility = "hidden"
    }
}

function checkWinner(response){
    console.log(response)
    if(response.includes('1')){
        if(response.includes('2')){
            if(response.includes('3')){
                changeButtonColor([1,2,3])
                return true;
            }
        } else if(response.includes('4')){
            if(response.includes('7')){
                changeButtonColor([1,4,7])
                return true;
            }
        } else if(response.includes('5')){
            if(response.includes('9')){
                changeButtonColor([1,5,9])
                return true;
            }
        }
    } 
    if(response.includes('2')){
        if(response.includes('5')){
            if(response.includes('8')){
                changeButtonColor([2,5,8])
                return true;
            }
        }
    }
     if(response.includes('3')){
        if(response.includes('6')){
            if(response.includes('9')){
                changeButtonColor([3,6,9])
                return true;
            }
        } else if(response.includes('5')){
            if(response.includes('7')){
                changeButtonColor([3,5,7])
                return true;
            }
        }
    }
     if(response.includes('4')){
        if(response.includes('5')){
            if(response.includes('6')){
                changeButtonColor([4,5,6])
                return true;
            }
        }
    } else if(response.includes('7')){
        if(response.includes('8')){
            if(response.includes('9')){
                changeButtonColor([7,8,9])
                return true;
            }
        }
    }
}

function changeButtonColor(buttonIds){
    buttonIds.forEach(buttonId => {
        document.getElementById(buttonId).style.backgroundColor = "greenyellow"
    })
}

function declareWinner(player){
    document.getElementById('winnerName').style.visibility = 'visible'
    document.getElementById('winnerName').classList.add('animated', 'bounceInLeft')
    document.getElementById('winnerName').innerText = `The WINNER is ${player}`
    console.log(`The winner is ${player}`)
}


