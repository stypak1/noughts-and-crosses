window.onload = function() {
  field = document.querySelector('.field-wrapper');
  cells = document.querySelectorAll('.cell');
  origBoard = new Array(9);
  for (var i = 0; i < origBoard.length; i++) {
    origBoard[i] = i;
  }
  huPlayer = "O";
  aiPlayer = "X";
  initCounters();

  function initCounters() {
    storage = localStorage;
    huWins = storage.getItem('huWins');
    aiWins = storage.getItem('aiWins');
    draws = storage.getItem('draws');
    insertHumanWinsCount();
    insertAIWinsCount();
    insertDrawsCount();
  }

  field.onclick = function() {
    var currentCell = event.target;
    currentCell.innerHTML = "O";
    setHumanMove(currentCell);
    checkWin();
    AIMove();
    checkWin();
  };

  function setHumanMove(current) {
    current.setAttribute('name', 1);
    for (var i = 0; i < cells.length; i++) {
      if (cells[i].hasAttribute('name')) {
        origBoard[i] = "O";
      }
    }
    current.removeAttribute('name');
  }

  function AIMove() {
    var bestSpot = minimax(origBoard, aiPlayer);
    origBoard[bestSpot.index] = "X";
    cells[bestSpot.index].innerHTML = "X";
  }

  // the main minimax function
  function minimax(newBoard, player) {
    //available spots
    var availSpots = emptyIndexies(newBoard);

    // checks states (win, lose, and tie)
    if (winning(newBoard, huPlayer)) {
      return {
        score: -10
      };
    } else if (winning(newBoard, aiPlayer)) {
      return {
        score: 10
      };
    } else if (availSpots.length === 0) {
      return {
        score: 0
      };
    }

    var moves = [];

    // loop through available spots
    for (var i = 0; i < availSpots.length; i++) {
      var move = {};
      move.index = newBoard[availSpots[i]];

      // set the empty spot to the current player
      newBoard[availSpots[i]] = player;
      var result;
      //if collect the score resulted from calling minimax on the opponent of the current player
      if (player == aiPlayer) {
        result = minimax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        result = minimax(newBoard, aiPlayer);
        move.score = result.score;
      }
      newBoard[availSpots[i]] = move.index;
      moves.push(move);
    }

    // choose the move with the highest score
    var bestMove;
    var bestScore;
    if (player === aiPlayer) {
      bestScore = -10000;
      for (i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {

      // choose the move with the lowest score
      bestScore = 10000;
      for (i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
  }

  // returns the available spots on the board
  function emptyIndexies(board) {
    return board.filter(s => s != "O" && s != "X");
  }

  // winning combinations using the indexies
  function winning(board, player) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkWin() {
    if (winning(origBoard, huPlayer)) {
      document.querySelector('.wins-message').innerHTML = 'You Win!!! (но это вряд ли:))';
      huWins++;
      storage.setItem('huWins', huWins);
      insertHumanWinsCount();
      cleaningFields();
    } else if (winning(origBoard, aiPlayer)) {
      document.querySelector('.wins-message').innerHTML = 'Computer Win!!!';
      aiWins++;
      storage.setItem('aiWins', aiWins);
      insertAIWinsCount();
      cleaningFields();
    } else if (emptyIndexies(origBoard).length == 0) {
      document.querySelector('.wins-message').innerHTML = 'It\'s a Draw';
      draws++;
      storage.setItem('draws', draws);
      insertDrawsCount();
      cleaningFields();
    }
  }
  // TO DO (переделать в одну функцию)
  function insertHumanWinsCount() {
    document.querySelector('.human-wins').innerHTML = storage.getItem('huWins');
  }

  function insertAIWinsCount() {
    document.querySelector('.ai-wins').innerHTML = storage.getItem('aiWins');
  }

  function insertDrawsCount() {
    document.querySelector('.draws').innerHTML = storage.getItem('draws');
  }

  function cleaningFields() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
    }
    for (var k = 0; k < origBoard.length; k++) {
      origBoard[k] = k;
    }
  }
};
