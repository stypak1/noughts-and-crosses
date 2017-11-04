var gameFields = document.querySelectorAll('td');
var countCrossesWin = 0;
var countNoughtWin = 0;
for (var i = 0; i < gameFields.length; i++) {
  gameFields[i].addEventListener('click', move);
}

function move() {
  if (this.querySelector('span') == null) {
    // user move
    this.insertAdjacentHTML("afterBegin", "<span class=\"cross\"></span");
    if (checkWin() == true) {
      alert("Crosses win");
      countCrossesWin++;

    } else {
      //computer move
      var compMove = findEmptyField();
      compMove.insertAdjacentHTML("afterBegin", "<span class=\"nought\"></span");
      if (checkWin() == true) {
        alert("Noughts win");
        countNoughtWin++;
      }
    }
  }
}

function findEmptyField() {
  for (var j = 0; j < gameFields.length; j++) {
    if (gameFields[j].querySelector('span') == null) {
      return gameFields[j];
    }
  }
}

function checkWin() {
  if (document.querySelectorAll('tr:first-child td span.cross').length == 3 ||
    document.querySelectorAll('tr:nth-child(2) td span.cross').length == 3 ||
    document.querySelectorAll('tr:last-child td span.cross').length == 3 ||
    document.querySelectorAll('td:first-child span.cross').length == 3 ||
    document.querySelectorAll('td:nth-child(2) span.cross').length == 3 ||
    document.querySelectorAll('td:last-child span.cross').length == 3 ||
    document.querySelectorAll('tr:nth-child(1) td:nth-child(1) span.cross, tr:nth-child(2) td:nth-child(2) span.cross, tr:nth-child(3) td:nth-child(3) span.cross').length == 3 ||
    document.querySelectorAll('tr:nth-child(3) td:nth-child(1) span.cross, tr:nth-child(2) td:nth-child(2) span.cross, tr:nth-child(1) td:nth-child(3) span.cross').length == 3) {
    return 1;
  } else if (document.querySelectorAll('tr:first-child td span.nought').length == 3 ||
    document.querySelectorAll('tr:nth-child(2) td span.nought').length == 3 ||
    document.querySelectorAll('tr:last-child td span.nought').length == 3 ||
    document.querySelectorAll('td:first-child span.nought').length == 3 ||
    document.querySelectorAll('td:nth-child(2) span.nought').length == 3 ||
    document.querySelectorAll('td:last-child span.nought').length == 3 ||
    document.querySelectorAll('tr:nth-child(1) td:nth-child(1) span.nought, tr:nth-child(2) td:nth-child(2) span.nought, tr:nth-child(3) td:nth-child(3) span.nought').length == 3 ||
    document.querySelectorAll('tr:nth-child(3) td:nth-child(1) span.nought, tr:nth-child(2) td:nth-child(2) span.nought, tr:nth-child(1) td:nth-child(3) span.nought').length == 3) {
    return 2;
  }
}
