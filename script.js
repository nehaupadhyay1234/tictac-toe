const board= document.getElementaryById('board');
const cells= document.getElementaryById('.cell');
const statusDiv= document.getElementaryById('status');
const resetButton= document.getElementaryById('reset');
let currentPlayer='X';
let gameState=['', '', '','','','','','',''];
let gameActive= true;
 const winConditions = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [ 0,3,6],
     [ 1,4,7],
     [ 2,5,8],
     [ 0,4,8],
     [2,4,6]
];
function handleClick(event) {
    const index = event.target.dataset.index;
    if(gameState[index] || ! gameActive) return;

    gameStatew[index]=currentPlayer;
    event.target.textContent=currentPlayer;
    if(checkWinener()) {
        statusDiv.textContent ='${currentPlayer} wins!';
        gameActive =false;
    } else if(gameState.every(cell => cell !== '')) {
        statusDiv.textContent ='It\'s a tie!';
        gameActive = false;
    } else {currentPlayer=currentPlayer === 'X' ? '0' : 'X';
      statusDiv.textContent = '${currentPlayer}'s turn` ;

    }
    }
    function checkWinner() {
        return
        winConditions.some(condition => { 
            const [a,b,c] =
            condition;
            return gameState[a] && gameState === gameState[b] && gameState[a] === gameState[c];
        });
    }
    function resetGame() {
        gameState = ['', '','','','','','','',''
            ] ;
            gameActive=true;
            currentPlayer ='X';
            statusDiv.textContent ='$ {currentPlayer}'s turn` ;
            cells.forEach(cell => {
                cell.textContent = '';
            });
           }
           cells.forEach(cell => {
               cell.addEventListener('click',handleClick);
           });
           resetButton.addEventListener('click',resetGame);
           statusDiv.textContent ='${currentPlayer}'s turn` ;
}


