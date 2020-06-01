const BOARD = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let board = null;
player = 1;
computer = -1;


allCell = document.querySelectorAll('.grid-container > div');



function drawCircle(target) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circle');
    target.appendChild(circle);
}

function drawCross(target) {
    let cross = document.createElement('div');
    cross.setAttribute('class', 'cross');
    target.appendChild(cross);
}

function init() {
    board = JSON.parse(JSON.stringify(BOARD));
    allCell.forEach(function (cell) {
        cell.innerHTML = "";
    })
}


function checkRow() {
    for (i = 0; i < 3; i++) {
        let temp = 0;
        for (j = 0; j < 3; j++) {
            temp += board[i][j];
        }
        if (Math.abs(temp) == 3) {
            return true;
        }
    }

    return false;
}


function checkCol() {
    for (i = 0; i < 3; i++) {
        let temp = 0;
        for (j = 0; j < 3; j++) {
            temp += board[j][i];
        }
        if (Math.abs(temp) == 3) {
            return true;
        }
    }

    return false;
}

function checkCross() {
    if (Math.abs(board[0][0] + board[1][1] + board[2][2]) == 3 ||
        Math.abs(board[0][2] + board[1][1] + board[2][0]) == 3) {
        return true;
    }
    return false;
}


function checkWin() {
    if (checkRow() || checkCross() || checkCol()) {
        return true;
    }
}

function checkTie() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (board[i][j] == 0) {
                return;
            }
        }
        return true;
    }
}







// for (i = 0; i < 3; i++) {
//     target.id()
// }