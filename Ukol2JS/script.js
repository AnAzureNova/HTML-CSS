const label = document.getElementById("label");

function ukol1(){
    let num1= Number(prompt("Input 1"));
    let num2= Number(prompt("Input 2"));

    label.innerHTML = num1 + num2;
    console.log(num1 + num2);
}
function ukol2(){
    let num = Number(prompt("Input Number"));
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
    let cs = Number(prompt("Input a temperature in C°"));
    let fh = cs * 9/5 + 32;
    label.innerHTML = `${cs}C° = ${fh}F`;
    console.log(`${cs}C° = ${fh}F`);
}
function ukol4(){
    let num = Number(prompt("Input Number"));
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
    let strg = prompt("Enter any word or sentence");
    if (strg.includes("a")){
        label.innerHTML = "String contains an A";
        console.log("String contains an A");
    }
    else{
        label.innerHTML = "String doesnt contain an A";
        console.log("String doesnt contain an A");
    }
}