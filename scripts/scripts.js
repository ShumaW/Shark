var burger = document.getElementById('burger');

var burgerIcon = document.getElementById('burger-icon');
var crossIcon = document.getElementById('cross-icon');

console.log(burger);
console.log(burgerIcon);
console.log(crossIcon);

burger.addEventListener("click", function(){
    burgerIcon.classList.toggle('hide-mobile');
    crossIcon.classList.toggle('hide-mobile');
});