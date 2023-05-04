let str = "capac";
let str2 = "mere";

function validare(str){
    let reverseString = "";
    for(let i=0; i<str.length; i++){
        reverseString = str.charAt(i) + reverseString;
    }
    if(str === reverseString){
        return true;
    }
    else{
        return false;
    }
}

function validare2(str){
    let reverseString = str.split("").reverse().join("");
    if(str === reverseString){
        return true;
    }
    else{
        return false;
    }
}

rez = validare2(str);
rez2 = validare2(str2);
console.log(rez, rez2);
