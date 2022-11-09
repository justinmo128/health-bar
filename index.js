// Canvas and graphics context
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 960;
cnv.height = 170;

// Global variables
let health = 100;
let shield = 50;
let healthheight = 40
let shieldheight = 10
let btns = {
    y: cnv.height - (healthheight + shieldheight) - 110,
    w: 200,
    h: 60
}
let btn = [
    {
        x: 10,
        y: cnv.height - (healthheight + shieldheight) - 110,
        w: 200,
        h: 60
    },
    {
        x: 220,
        y: cnv.height - (healthheight + shieldheight) - 110,
        w: 200,
        h: 60
    },
    {
        x: 430,
        y: cnv.height - (healthheight + shieldheight) - 110,
        w: 200,
        h: 60
    },
    {
        x: 640,
        y: cnv.height - (healthheight + shieldheight) - 110,
        w: 200,
        h: 60
    },
]
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
    ctx.fillRect(0, cnv.height - healthheight, cnv.width, healthheight)
    ctx.fillStyle = "green";
    ctx.fillRect(0, cnv.height - healthheight, cnv.width * health / 100, healthheight);
    if (health < 0) {
        health = 0;
    }
    if (shield < 0) {
        shield = 0;
    }
    // Shield bar
    ctx.fillStyle = "blue";
    ctx.fillRect(0, cnv.height - (healthheight + shieldheight), cnv.width, shieldheight)
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, cnv.height - (healthheight + shieldheight), cnv.width * shield / 50, shieldheight);
    // Buttons
    ctx.fillStyle = "gray";
    ctx.fillRect(btn[0].x, btns.y, btns.w, btns.h)
    ctx.fillRect(btn[1].x, btns.y, btns.w, btns.h)
    ctx.fillRect(btn[2].x, btns.y, btns.w, btns.h)
    ctx.fillRect(btn[3].x, btns.y, btns.w, btns.h)
    // Text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "50px Roboto";
    ctx.fillText("Head", btn[0].x + 100, btns.y + 50);
    ctx.fillText("Body", btn[1].x + 100, btns.y + 50);
    ctx.fillText("Legs", btn[2].x + 100, btns.y + 50);
    ctx.fillText("Reset", btn[3].x + 100, btns.y + 50);
    ctx.textAlign = "left";
    ctx.font = "25px Roboto"
    ctx.fillText(`Health: ${Math.round(health)}, Shield: ${Math.round(shield)}`, 10, cnv.height - (healthheight + shieldheight) - 10)

    requestAnimationFrame(draw);
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
    // Head
    if (mouse.x > btn[0].x && mouse.x < btn[0].x + btns.w && mouse.y > btns.y && mouse.y < btns.y + btns.h) {
        let dmg = 160;
        if (shield >= dmg * 0.66) {
            shield -= dmg * 0.66;
            health -= dmg * 0.34;
        } else if (shield > 0) {
            health -= dmg - shield
            shield = 0;
        } else {
            health -= dmg;
        }
    }
    // Body
    if (mouse.x > btn[1].x && mouse.x < btn[1].x + btns.w && mouse.y > btns.y && mouse.y < btns.y + btns.h) {
        let dmg = 40;
        if (shield >= dmg * 0.66) {
            shield -= dmg * 0.66;
            health -= dmg * 0.34;
        } else if (shield > 0) {
            health -= dmg - shield
            shield = 0;
        } else {
            health -= dmg;
        }
    }
    // Legs
    if (mouse.x > btn[2].x && mouse.x < btn[2].x + btns.w && mouse.y > btns.y && mouse.y < btns.y + btns.h) {
        let dmg = 34;
        if (shield >= dmg * 0.66) {
            shield -= dmg * 0.66;
            health -= dmg * 0.34;
        } else if (shield > 0) {
            health -= dmg - shield
            shield = 0;
        } else {
            health -= dmg;
        }
    }
    // Reset
    if (mouse.x > btn[3].x && mouse.x < btn[3].x + btns.w && mouse.y > btns.y && mouse.y < btns.y + btns.h) {
        health = 100;
        shield = 50;
    }
})

document.getElementById("set-health").addEventListener("click", () => {
    health = +document.getElementById("health-in").value;
})

document.getElementById("set-shield").addEventListener("click", () => {
    shield = +document.getElementById("shield-in").value;
})

document.getElementById("set-cnvheight").addEventListener("click", () => {
    cnv.height = +document.getElementById("cnvheight-in").value;
})