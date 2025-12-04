const label = document.getElementById("label");

//addition
function ukol1(){
    const num1= Number(prompt("Input 1"));
    const num2= Number(prompt("Input 2"));

    label.innerHTML = num1 + num2;
    console.log(num1 + num2);
}

//even / odd
function ukol2(){
    const num = Number(prompt("Input Number"));
    if (num % 2 == 0){
        label.innerHTML = "Number is even";
        console.log("Number is even");
    }
    else{
        label.innerHTML = "Number is odd";
        console.log("Number is odd");
    }
}

//C° to F
function ukol3(){
    const cs = Number(prompt("Input a temperature in C°"));
    const fh = cs * 9/5 + 32;
    label.innerHTML = `${cs}C° = ${fh}F`;
    console.log(`${cs}C° = ${fh}F`);
}

//pos / neg or zero
function ukol4(){
    const num = Number(prompt("Input Number"));
    if (num == 0){
        label.innerHTML = "Number is exactly 0";
        console.log("Number is exactly 0");
    }
    else if (num > 0){
        label.innerHTML = "Number is positive";
        console.log("Number is positive");
    }
    else{
        label.innerHTML = "Number is negative";
        console.log("Number is negative");
    }
}

//does it contain an a i wonder
function ukol5(){
    const strg = prompt("Enter any word or sentence");
    if (strg.includes("a")){
        label.innerHTML = "String contains an A";
        console.log("String contains an A");
    }
    else{
        label.innerHTML = "String doesnt contain an A";
        console.log("String doesnt contain an A");
    }
}

//something with .includes again
function ukol6(){
    const strg = prompt("Enter any word or sentence");
    const ammountOfLetters = {};
    let stack = "";

    for (let i = 0; i<strg.length; i++){
        const currLetter = strg[i];

        if(strg.includes(currLetter)){
            if (ammountOfLetters[currLetter]) ammountOfLetters[currLetter]++;
            else ammountOfLetters[currLetter] = 1;
        }
    }

    for(const letter in ammountOfLetters){ //no clue how i managed to get this to work but it does now
        let currOutput = `${letter}: ${ammountOfLetters[letter]} `;
        stack += currOutput + "<br>";
        console.log(currOutput);
    }
    label.innerHTML = stack;
}

//prime number
function ukol7(){
    const num = Number(prompt("Input Number"));
    let isPrime = false;
    isPrime = isPrimeNum(num);
    if (isPrime){
        label.innerHTML = "Input number is a prime number";
        console.log("Input number is a prime number");
    }
    else{
        label.innerHTML = "Input number isnt a prime number";
        console.log("Input number isnt a prime number");
    }
} //fo ukol7
function isPrimeNum(num){
    const sqrtNum = Math.floor(Math.sqrt(num));
    if (num === 1){
        return false;
    }
    for (let i = 2; i <= sqrtNum; i++){
        if (num % i == 0) return false;
    }
    return true;
}

//uloha 31 - event listener
const buttonWithListener = document.getElementById("buttonWithListener1");
buttonWithListener1.addEventListener("click", greetFunc);
function greetFunc(){
    alert("HELLO WORLD!");
}

//arrow func test
function ukol32(){
    mult = (a, b) => a*b;
    label.innerHTML = mult(5, 2); 
    //NO more CONSOLE output (for noww)
}

//TIMEE
const timeOutput = document.getElementById("timeField");
function ukol33(){ //primer
    timeOutput.innerHTML = "Grabbing time";
    setInterval(clock, 1000);
}
function clock(){
    timeOutput.innerHTML = getTime();
}
function getTime(){ //time grab
    let currTime = new Date().toLocaleTimeString();
    return currTime;
}

//change bg color
function ukol34(){
    changeBG("gray")
}
function ukol34revert(){
    changeBG("white")
}
function changeBG(color){
    document.body.style.backgroundColor = color;
}

//image hover without css
const image = document.getElementById("image");
image.addEventListener("mouseover", mouseover_func);
image.addEventListener("mouseout", mouseout_func);
function mouseover_func(){
    image.style.width = "100%";
}
function mouseout_func(){
    image.style.width = "2%";
}

//form thing
let input1 = "";
let input2 = "";
document.getElementById("buttonSubmit").addEventListener("click",submitForm);
function submitForm(){
    event.preventDefault();
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    console.log(input1);
    console.log(input2);
}
document.getElementById("buttonDisplay").addEventListener("click", formRead);
function formRead(){
    document.getElementById("output1").innerHTML = input1;
    document.getElementById("output2").innerHTML = input2; //this didnt work for like 30 minutes just cause i cant read what i write never agianlakjslkjsfa
}

//click to win
let ammount = 0;
document.getElementById("buttonAddClick").addEventListener("click", clickerAddFunc);
function clickerAddFunc(){
    ammount += 1;
    document.getElementById("clickCountLabel").innerHTML = ammount;
}

function hideText(){
    document.getElementById("labelToggleable").classList.toggle("invisible");
}
function showText(){
    document.getElementById("labelToggleable").classList.toggle("invisible");
}

//form but working maybe
document.getElementById("buttonSubmit2").addEventListener("click",validateForm);
function validateForm(){
    ev.preventDefault();
    const nameVal = document.getElementById("inputName").value;
    const emailVal = document.getElementById("inputEmail").value;
    //finish this later
}

//change text size using a slider
const slider = document.getElementById("range");
const textField = document.getElementById("changeSize");
function refreshFunc(e){
    textField.innerHTML = e;
    textField.style.fontSize  = e+"px";
}

let result = 1;
function factorial(){
    const e = Number(prompt("Input Number"));
    if(e>0){
        for(let i = 1; i<=e;i++){
            result *= i;
        }
        document.getElementById("factPrint").innerHTML = result;
    }
}

function addToDo(){
    const toDoInput = document.getElementById("todoInput");
    const toDoOutput =  document.getElementById("todoList");
    if(!toDoInput.value.trim()) return;
    const listEntry = document.createElement("li");
    listEntry.innerHTML=toDoInput.value;
    toDoOutput.appendChild(listEntry);
}

