// Canvas and graphics context
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 960;
cnv.height = 720;

// Global variables
let health = 100;
let shield = 50;
let mouse = {
    x: 0,
    y: 0,
}

// Draw Function
window.addEventListener("load", draw);
function draw() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    // Health bar
    ctx.fillStyle = "red";
    ctx.fillRect(0, 680, 960, 40)
    ctx.fillStyle = "green";
    ctx.fillRect(0, 680, 960 * health / 100, 40);
    // Shield bar
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 670, 960, 10)
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 670, 960 * shield / 50, 10);
    // Buttons
    ctx.fillStyle = "gray";
    ctx.fillRect(380, 50, 200, 60)
    ctx.fillRect(380, 130, 200, 60)
    ctx.fillRect(380, 210, 200, 60)
    ctx.fillRect(380, 290, 200, 60)
    // Text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "50px Roboto";
    ctx.fillText("Head", 480, 100);
    ctx.fillText("Body", 480, 180);
    ctx.fillText("Legs", 480, 260);
    ctx.fillText("Reset", 480, 340);

    requestAnimationFrame(draw);
    console.log(health)
}

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 

    // Calc mouse coordinates using mouse event and canvas location info
    mouse.x = Math.round(event.clientX - cnvRect.left);
    mouse.y = Math.round(event.clientY - cnvRect.top);
}

document.addEventListener("click", () => {
    shield -= 1;
    health -= 5;
    if (mouse.x > 380 && mouse.x < 580 && mouse.y > 290 && mouse.y < 350) {
        health = 100;
        shield = 50;
    }
})