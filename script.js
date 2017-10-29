var elem = document.querySelectorAll('td');
for (var i = 0; i < elem.length; i++) {
  elem[i].onclick = function addDagger() {
    if (this.querySelector('span') == null) {
      this.insertAdjacentHTML("afterBegin", "<span class=\"cross\"></span");
    }
    while (elem[Math.floor(Math.random() * elem.length-1)].querySelector('span') == null) {
      insertAdjacentHTML("afterBegin", "<span class=\"nought\"></span");
    }
  }
}
