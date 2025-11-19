//let const
//---

const label = document.getElementById("testLabel");
const input1 = document.getElementById("input1");
const input2 =  document.getElementById("input2");
console.log(typeof(23));

function onButtonClick(){
    let val1, val2;
    val1 = input1.textContent;
    val2 = input2.textContent;

    console.log(val1);
    console.log(val2);

    button.style.backgroundColor = "#404040";
    label.innerHTML = "BOO";
    label.style.color = "#ff0000";
    label.style.alignSelf = "center";
    label.style.scale = "200%";
}
function returnFunc(){
    button.style.backgroundColor = "#252525";
    label.innerHTML = "Inconspicuous label";
    label.style.color = "#fff";
    label.style.alignSelf = "auto";
    label.style.scale = "100%";
}