var img = document.getElementById("img");

var Xpos = 50;
var Ypos = 50;
var width = 10;
var stepVal = 1;
var isShiftOn = false;

function updatePosition() {
    img.style.top = Ypos + "%";
    img.style.left = Xpos + "%";
    img.style.width = width + "%";
}
function updateStepStatus() {
    var statusText = isShiftOn ? "Step Value: Fast" : "Step Value: Normal";
    document.getElementById("stepStatus").innerText = statusText;
}
window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w": case "W": Ypos += stepVal; break;
        case "a": case "A": Xpos += stepVal; break;
        case "s": case "S": Ypos -= stepVal; break;
        case "d": case "D": Xpos -= stepVal; break;
        case "q": case "Q": width += stepVal * 2; break;
        case "e": case "E": width -= stepVal * 2; break;
        case "g": case "G": stepVal = 2; break;
        case "Shift":
            isShiftOn = !isShiftOn;
            stepVal = isShiftOn ? 4 : 1;
            updateStepStatus();
            break;
    }
    updatePosition();
});