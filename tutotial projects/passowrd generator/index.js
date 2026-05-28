function generate(passowrdlenght,AllowLower,AllowUpper,AllowSymbols,AllowNumber){

    const LowerCase = "qwertzuiopasdfghjklyxcvbnm";
    const UpperCase = "QWERTZUIOPASDFGHJKLYXCVBNM";
    const Number = "1234567890"
    const Symbols = "+è!£àé_:-.,öä$ü;"

    let AllowChars = "";
    let passowrd = "";

    AllowChars += AllowLower ? LowerCase : "";
    AllowChars += AllowUpper ? UpperCase : "";
    AllowChars += AllowSymbols ? Number : "";
    AllowChars += AllowNumber ? Symbols : "";

    if(passowrdlenght == 0){
        return "please select more than 0 for your lenght"
    }
    else if(AllowChars === 0){
        return "please select atleast one of the option below"
    }

    for(let i = 0; i < passowrdlenght; i++){
        const randomindex = Math.floor(Math.random() * AllowChars.length)
        passowrd += AllowChars[randomindex]
    }
    return passowrd
}



const passowrdlenght = 12;
const AllowLower = true;
const AllowUpper = true;
const AllowSymbols =  true;
const AllowNumber = true;

const passowrd = generate(passowrdlenght,AllowLower,AllowUpper,AllowSymbols,AllowNumber)

console.log("this is your passowrd " + passowrd)