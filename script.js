var gameFields = document.querySelectorAll('td');
var noughtWins = 0;
var crossWins = 0;
for (var i = 0; i < gameFields.length; i++) {
  gameFields[i].addEventListener('click', move);
}

function move() {
  if (this.querySelector('span') == null) {
    // user move
    this.insertAdjacentHTML("afterBegin", "<span class=\"cross\"></span");
    checkWin();
    //computer move
    var compMove = findEmptyField();
    compMove.insertAdjacentHTML("afterBegin", "<span class=\"nought\"></span");
    checkWin();
  }
}

function findEmptyField() {
  for (var j = 0; j < gameFields.length; j++) {
    if (gameFields[j].querySelector('span') == null) {
      return gameFields[j];
    }
  }
}

function checkThreeInRow() {
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

function checkWin() {
  if (checkThreeInRow() == 1) {
    alert('Crosses Win!');
    crossWins++;
    insertCrossWinsCount();
    cleaningFields();
    return true;
  } else if (checkThreeInRow() == 2) {
    alert('Noughts Win!');
    noughtWins++;
    cleaningFields();
    return true;
  } else {
    return false;
  }
}

function insertCrossWinsCount() {
  document.querySelector('.cross-wins').innerHTML = crossWins;
}

function insertNoughtWinsCount() {
  document.querySelector('.nought-wins').innerHTML = noughtWins;
}

function cleaningFields() {
  var usedFields = document.querySelectorAll('table span');
  for (var i = 0; i < usedFields.length; i++) {
    usedFields[i].parentNode.removeChild(usedFields[i]);
  }
}
