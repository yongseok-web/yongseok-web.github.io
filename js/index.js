
var el = document.getElementsByClassName("square")[0];

for (i = 1; i <= 150; i++) {
elChild = document.createElement("div");
elChild.setAttribute("id", i);
elChild.setAttribute("class", "light");
el.appendChild(elChild);
}
