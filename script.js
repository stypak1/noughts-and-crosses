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
        }
    }
}
