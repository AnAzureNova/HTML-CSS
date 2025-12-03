let numinput = [];
let input = "";
let index = 0;
let sum = 0;
let odd = 0;
let even = 0;
let max = 0;
function inputFunc(){
    do{
        input = prompt("Zadej hodnotu: ");
        if (input == ""){
            console.log("exit");
        }
        else{
            numinput[index] = Number(input);
            if(numinput[index]>max) max = numinput[index];
            sum = sum + numinput[index];
            if(numinput[index] % 2 == 0) even++;
            else odd++;
            index ++;
        }
    } while(input != "");
    console.log("MAX: "+max);
    console.log("PRUM: "+sum/index);
    console.log("LICH: "+odd);
    console.log("SUD: "+even);
}

//read value
const target = document.getElementById("target");
function anotherFunc(){
    let e = target.value;
    console.log(e);
}
