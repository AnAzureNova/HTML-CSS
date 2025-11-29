const label = document.getElementById("label");

function ukol1(){
    const num1= Number(prompt("Input 1"));
    const num2= Number(prompt("Input 2"));

    label.innerHTML = num1 + num2;
    console.log(num1 + num2);
}


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


function ukol3(){
    const cs = Number(prompt("Input a temperature in C°"));
    const fh = cs * 9/5 + 32;
    label.innerHTML = `${cs}C° = ${fh}F`;
    console.log(`${cs}C° = ${fh}F`);
}


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

    for(const letter in ammountOfLetters){
        let currOutput = `${letter}: ${ammountOfLetters[letter]} `;
        stack += currOutput + "<br>"; 
        console.log(currOutput);
    }
    label.innerHTML = `${stack}`;
}


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
}
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