const BOARD = [[0,0,0],
               [0,0,0],
               [0,0,0]];

let board = null;
let player = 1;


function drawCircle(cellId){
  let circle = document.createElement("div");
  circle.setAttribute('class', 'circle');
  document.getElementById(cellId).appendChild(circle);
}

function drawCross(cellId){
  let cross = document.createElement("div");
  cross.innerHTML = "X";
  cross.setAttribute('class', 'cross');
  document.getElementById(cellId).appendChild(cross);
}

function init() {
  board = JSON.parse(JSON.stringify(BOARD));
  player = 1
  document.querySelectorAll(".grid-container>div").forEach(div => {
    div.innerHTML = '';
    div.addEventListener('click', handleClick)
  });
  
  document.getElementById("result").innerHTML = '';
}

function tearDown(){
  document.querySelectorAll(".grid-container>div").forEach(div => {
    div.removeEventListener('click', handleClick)
  });
}

function displayMessage(tie){
  if(tie){
     document.getElementById("result").innerHTML= "It's a tie"; 
  } else {
    document.getElementById("result").innerHTML = 1 == player ? "X" + " Won!" : "O" + " Won!"; 
  }
}

function handleClick(e){
  let target = e.target;
  if(board[target.id[1]][target.id[2]] == 0){
    board[target.id[1]][target.id[2]] = player;
    if(player == 1){
      drawCircle(target.id);
    } else {
      drawCross(target.id)
    }
    
    player *= -1;
  }
  
  let status = checkWin();
  
  switch(status) {
    case 0:
      console.log("It's a tie");
      tearDown();
      break;
    case 1:
      displayMessage();
      tearDown();
      break;
  }
  
  return
}

function checkWin(){
  if(checkRow() || checkCol() || checkCross()){
    return 1
  }
  
  if(!findZero()){
    return 0;
  }
  
  return -1;
}

function checkRow(){
  for(let i=0; i<3; i++){
    let temp = 0;
    for(let j=0; j<3; j++){
      temp += board[i][j];
    }
    if(Math.abs(temp) == 3)
      return true;
  }
  return false
}

function checkCol(){
  for(let i=0; i<3; i++){
    let temp = 0;
    for(let j=0; j<3; j++){
      temp += board[j][i];
    }
    if(Math.abs(temp) == 3)
      return true;
  }
  return false;
}

function checkCross(){
  let cross1 = board[0][0] + board[1][1] + board[2][2];
  let cross2 = board[0][2] + board[1][1] + board[2][0];
  
  return Math.abs(cross1) == 3 || Math.abs(cross2) == 3;
}

function findZero(){
  tempBoard =  JSON.parse(JSON.stringify(board));
  tempBoard = tempBoard.flat();
  return tempBoard.filter(cell => {return cell == 0}).length > 0
}
/* Game Setup */
init();