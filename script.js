document.body.style.margin   = 0
document.body.style.overflow = `hidden`


function setup () {
    createCanvas (window.innerWidth, window.innerHeight)
    rectMode(CENTER);
}

function draw () {
    background (`turquoise`)
    noStroke();
    
    fill(100);
    rect(50, 50, 30, 30);
}


