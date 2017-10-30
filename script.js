var elem = document.querySelectorAll('td');
for (var i = 0; i < elem.length; i++) {
    elem[i].onclick = function addDagger() {
        if (this.querySelector('span') == null) {
            this.insertAdjacentHTML("afterBegin", "<span class=\"cross\"></span");
            //random move
            function findEmptyField() {
                var randomField = elem[Math.floor(Math.random() * elem.length)];
                if (randomField.querySelector('span') == null){
                    return randomField;
                } else {
                    findEmptyField();
                }
            }
            var compMove = findEmptyField();
            compMove.insertAdjacentHTML("afterBegin", "<span class=\"nought\"></span");
            // end of game
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
                document.querySelectorAll('td:last-child span.nought').length == 3){
                alert("Game over");
            }
        }
    }
}
