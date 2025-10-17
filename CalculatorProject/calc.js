let out;
let reg = [];
reg[0] = ""; reg[1] = "";
let numberIndex = 0;
let charReg = "";
let isFirstIndexFull = false;
let isSecondIndexFull = false;
let hasFailed = false;
let isCalculationDone = false;

let nullCounter = 0;

const out0 = document.getElementById("out0");
const outC = document.getElementById("outC");
const out1 = document.getElementById("out1");
const outputField = document.getElementsByClassName("outputField")[0];
const nullPad = document.getElementById("null");


function errorHandler(errorIndex){
    switch(errorIndex){
        case 0: alert("ERROR 0 : Unknown error");break;
        case 1: alert("ERROR 1 : Syntax error");break;
        case 2: alert("ERROR 2 : Cannot divide by zero"); nullCounter++; break;
        case 3: alert("ERROR 3 : No answer in registry");break;
        case '?': alert("ERROR ? : stop"); nullCounter=0; break;
    }
}
function consoleLog(){
    console.log(`---\n${reg[0]} ${charReg} ${reg[1]}\nisReg1Full: ${isFirstIndexFull}\nisReg2Full: ${isSecondIndexFull}\nisFinished: ${isCalculationDone}\nIndex: ${numberIndex}\nOUT-REG: ${out}\n---`);
}
function erase(){
    numberIndex=0;
    reg[0] = "";
    reg[1] = "";
    out = "";
    charReg = "";
    isFirstIndexFull = false;
    isSecondIndexFull = false;
    isCalculationDone = false;
    hasFailed = false;
    out0.innerHTML = ""; outC.innerHTML = ""; out1.innerHTML = "";
    consoleLog();
}
function input(inputValue){
    if(isCalculationDone){
        reg[0] = "";
        numberIndex=0;
        isCalculationDone = false;
    }
    if(numberIndex==0){
        if (inputValue == 'answer'){
            if (out == undefined){
                errorHandler(3);
                hasFailed = true;
                erase();
            }
            charReg = "";
            outC.innerHTML=charReg;
            reg[0] = out;
            out0.innerHTML=reg[0];
        }
        else{
            reg[0] = String(reg[0]) + String(inputValue);
            out0.innerHTML=reg[0];
        }
        isFirstIndexFull = true;
        isCalculationDone = false;
    } 
    else{
        if (nullCounter>=2){
            errorHandler('?');
            nullPad.style.scale="0%";
        }
        if (inputValue == 'answer'){
            if (out == undefined){
                errorHandler(3);
                hasFailed = true;
                erase();
            }
            reg[1] = out;
            out1.innerHTML=reg[1];
        }
        else{
            reg[1] = String(reg[1]) + String(inputValue);
            if(charReg === '^'){
                outC.innerHTML=`<sup>${reg[1]}</sup>`;
            }
            else{
                out1.innerHTML=reg[1];
            }
        }
        isSecondIndexFull = true;
        isCalculationDone = false;
    } 
    consoleLog();
}
function operant(character){
    if (isSecondIndexFull) {
        calc();
    }
    isCalculationDone = false;
    charReg = character;
    outC.innerHTML=charReg;
    consoleLog();
    if (isFirstIndexFull) numberIndex = 1;
}
function calc(){
    reg[0]  = Number(reg[0]);
    reg[1]  = Number(reg[1]);
    switch(charReg){
        case "+": out = reg[0] + reg[1]; break;
        case "-": out = reg[0] - reg[1]; break;
        case "*": out = reg[0] * reg[1]; break;
        case "^": out = Math.pow(reg[0],reg[1]); break;
        case "/": 
        if (reg[1]==0){
            errorHandler(2);
            hasFailed = true;
            erase();
        }
        else out = reg[0] / reg[1]; break;
        default: out = reg[0]; break;
    }
    if (!isFirstIndexFull) {
        errorHandler(1);
        hasFailed = true;
        erase();
    }
    else if(numberIndex == 1 && !isSecondIndexFull){
        errorHandler(1);
        hasFailed = true;
        erase();
    }
    if (!hasFailed){
        out0.innerHTML=out;
        outC.innerHTML="";
        out1.innerHTML="";
        reg[0] = out;
        reg[1] = "";
        reg[0]  = String(reg[0]);
        reg[1]  = String(reg[1]);
        isSecondIndexFull = false;
        isCalculationDone = true;

        outputField.style.backgroundColor = "#353535ff"; // darker
        console.log(out);
        consoleLog();

        setTimeout(() => {
            outputField.style.backgroundColor = "#202020";
        }, 300);
    }
}

consoleLog();