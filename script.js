var elem = document.querySelectorAll('td');
for (var i = 0; i < elem.length; i++) {
  elem[i].onclick = function move() {
    if (this.querySelector('span') == null) {
      // user move
      this.insertAdjacentHTML("afterBegin", "<span class=\"cross\"></span");
      checkWin();
      //computer move
      var compMove = findEmptyField();
      compMove.insertAdjacentHTML("afterBegin", "<span class=\"nought\"></span");
      checkWin();

      function findEmptyField() {
        for (var j = 0; j < elem.length; j++) {
          if (elem[j].querySelector('span') == null) {
            return elem[j];
          }
        }
        // var randomField = elem[Math.floor(Math.random() * elem.length)];
        // if (randomField.querySelector('span') == null){
        //     return randomField;
        // } else {
        //     findEmptyField();
        // }
      }
      // end of game
      function checkWin() {
        if (document.querySelectorAll('tr:first-child td span.cross').length == 3 ||
          document.querySelectorAll('tr:first-child td span.nought').length == 3 ||
          document.querySelectorAll('tr:nth-child(2) td span.cross').length == 3 ||
          document.querySelectorAll('tr:nth-child(2) td span.nought').length == 3 ||
          document.querySelectorAll('tr:last-child td span.cross').length == 3 ||
          document.querySelectorAll('tr:last-child td span.nought').length == 3 ||
          document.querySelectorAll('td:first-child span.cross').length == 3 ||
          document.querySelectorAll('td:first-child span.nought').length == 3 ||
          document.querySelectorAll('td:nth-child(2) span.cross').length == 3 ||
          document.querySelectorAll('td:nth-child(2) span.nought').length == 3 ||
          document.querySelectorAll('td:last-child span.cross').length == 3 ||
          document.querySelectorAll('td:last-child span.nought').length == 3) {
          alert("Game over");
        }
      }
    }
  }
}
