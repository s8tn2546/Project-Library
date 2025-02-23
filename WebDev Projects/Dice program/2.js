const mybutton = document.getElementById("mybutton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

mybutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}