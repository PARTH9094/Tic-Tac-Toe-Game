let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector('#newBtn');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg')
let playerA = true;
let count = 0;
let winner
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(function (box) {
    box.addEventListener("click", function () {

        if (playerA === true) {
            box.innerHTML = 'X';
            playerA = false;
        }
        else {
            box.innerHTML = '0';
            playerA = true;
        }
        box.disabled = true;
        count++;
        winner = checkWinner();
        

        if (winner) {
            showWinner(winner); 
        } else if (count === 9) {
            drawGame();
        }

    })
});



function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("found winner")
                // winner = true
                // console.log("wwww", winner)
                // showWinner(pos1);
                return pos1;
             
            }
        }
    }
    
    return null;
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBox();
}



function disableBox() {
    for (let box of boxes) {
        box.disabled = true;
    }
}
function enableBox() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}


function drawGame() {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBox();
}


function rstBtn() {
    playerA = true;
    count = 0;
    enableBox();
    msgContainer.classList.add('hide');
}


newBtn.addEventListener("click", rstBtn);
resetBtn.addEventListener("click", rstBtn);

