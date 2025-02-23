const reset = document.getElementById("reset");
const point = document.getElementById("target");
const score = document.getElementById("score");

let scoreCount = 0;

const maxX = 1080;
const maxY = 800;


let x = Math.floor(Math.random() * maxX);
let y = Math.floor(Math.random() * maxY);
point.style.top = `${y}px`;
point.style.left = `${x}px`;


point.addEventListener("click", event => {
    changePos();
    scoreCount++;
    score.textContent = `Score: ${scoreCount}`;
})

function changePos(){
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);
    let size = Math.floor(Math.random() * 80 + 20);
    point.style.width = `${size}px`;
    point.style.height = `${size}px`;
    point.style.top = `${y}px`;
    point.style.left = `${x}px`;
    
}

reset.addEventListener("click", event => {
    scoreCount = 0;
    score.textContent = `Score: 0`;
    changePos();
})