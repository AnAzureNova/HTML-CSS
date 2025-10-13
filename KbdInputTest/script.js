//ref elemets for style edits n stuff
const img = document.getElementById("img");
const controlKbd = document.getElementById("kbd_1");
const shiftKbd = document.getElementById("kbd_2");
const legend1 = document.getElementsByClassName("legend1")[0];
const crosshair = document.getElementById("crosshair");

//max and min values
const minZoomVal = 5;
const maxZoomVal = 500;
//keyboard and mouse control values
let Xpos = 50; //%
let Ypos = 50; //%
let lastMouseX = 0;
let lastMouseY = 0;
let width = 10; //%
let stepVal = 1; //1 - normal, 4 - fast

//other toggleables
let isZoomingTowardsMouse = true;
let isShiftToggled = false; //step
let isCtrlToggled = true; //mouse (DEFAULT ON)
let isDragging = false;

//keyboard control update
function updatePosition() {
    img.style.top = Ypos + "%"; //y axis
    img.style.left = Xpos + "%"; //x axis
    img.style.width = width + "%"; //zoomsss
}

//toggleable legend 2 values
function updateStatus() {
    //step
    var statusText = isShiftToggled ? "Fast" : "Normal"; //set text true:false
    document.getElementById("stepStatus").innerText = statusText;
    if(isShiftToggled){
        shiftKbd.style.backgroundColor = "#4d4d4d"
        shiftKbd.style.color = "#FFF"
        document.getElementById("stepStatus").style.color = "#9effabff";
    }
    else{
        shiftKbd.style.backgroundColor = "#242424"; 
        shiftKbd.style.color = "#626262ff"
        document.getElementById("stepStatus").style.color = "#ffc1c1ff";
    }
    //mouse
    var statusText2 = isCtrlToggled ? "On" : "Off"; //set text true:false
    document.getElementById("mouseStatus").innerText = statusText2;
    if(isCtrlToggled){
        controlKbd.style.backgroundColor = "#4d4d4d"
        controlKbd.style.color = "#FFF"
        document.getElementById("mouseStatus").style.color = "#9effabff";
        legend1.style.visibility = "hidden";
        crosshair.style.visibility = "hidden";
        enableMouseControls();
    }
    else{
        controlKbd.style.backgroundColor = "#242424"; 
        controlKbd.style.color = "#626262ff"
        document.getElementById("mouseStatus").style.color = "#ffc1c1ff";
        legend1.style.visibility = "visible";
        crosshair.style.visibility = "visible";
        disableMouseControls();
    }
}
//keyboard inputs tracker
window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w": case "W": 
            if (!isCtrlToggled) Ypos += stepVal; 
            break;
        case "a": case "A": 
            if (!isCtrlToggled) Xpos += stepVal; 
            break;
        case "s": case "S": 
            if (!isCtrlToggled) Ypos -= stepVal; 
            break;
        case "d": case "D": 
            if (!isCtrlToggled) Xpos -= stepVal; 
            break;
        case "e": case "E": 
            if (!isCtrlToggled && width <= maxZoomVal) width += stepVal * 2; 
            break;
        case "q": case "Q": 
            if (!isCtrlToggled && width >= minZoomVal) width -= stepVal * 2; 
            break;
        case "g": case "G": 
            stepVal = 2; 
            break;
        case "Shift": //step
            isShiftToggled =! isShiftToggled;
            stepVal = isShiftToggled ? 4 : 1;
            updateStatus();
            break;
        case "Control": //mouse
            isCtrlToggled =! isCtrlToggled;
            updateStatus();
            break;
    }
    updatePosition();
});

//enable mouse
function enableMouseControls() {
    img.style.cursor = "grab";
    img.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("wheel", onMouseWheel, { passive: false });
}

//disable mouse
function disableMouseControls() {
    img.style.cursor = "default";
    img.removeEventListener("mousedown", onMouseDown);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    window.removeEventListener("wheel", onMouseWheel);
}

//mouse hold
function onMouseDown(e) {
    isDragging = true;
    lastMousePosX = e.clientX;
    lastMousePosY = e.clientY;
    img.style.cursor = "grabbing";
}

function onMouseMove(e) {
    if (!isDragging) return; //cancel if not holding
    let movedByX = e.clientX - lastMousePosX;
    let movedByY = e.clientY - lastMousePosY;
    Xpos += (movedByX / window.innerWidth) * 100;
    Ypos += (movedByY / window.innerHeight) * 100;
    updatePosition();
    lastMousePosX = e.clientX;
    lastMousePosY = e.clientY;
}

//mouse release
function onMouseUp() {
    isDragging = false;
    img.style.cursor = "grab";
}

//mouse zoom func :P
function onMouseWheel(e) {
    const zoomVal = stepVal * 3;
    const tempWidth = width;

    if (e.deltaY < 0) {
        width += zoomVal; //scroll up (zoom in)
    } 
    else {
        width -= zoomVal; //scroll down (zoom out)
    }
    width = Math.max(minZoomVal, Math.min(width, maxZoomVal)); //zoom limits

    //zooooooms towards the mouse instead
    const zoomRatio = width / tempWidth;
    const mouseX = (e.clientX / window.innerWidth) * 100; //mouse x values
    const mouseY = (e.clientY / window.innerHeight) * 100; //mouse y values
    if (isZoomingTowardsMouse)
    {
        Xpos -= (mouseX - Xpos) * (zoomRatio - 1);
        Ypos -= (mouseY - Ypos) * (zoomRatio - 1);
    }
    updatePosition();
}

//on startup launch function, fixes mouse controls being the default (and them working)
updateStatus();