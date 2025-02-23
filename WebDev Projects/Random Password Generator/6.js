
function generatePassowrd(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){
    
    const LowerCase = "abcdefghijklmnopqrstuvwxyz";
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "0123456789";
    const symbols = "!@#$%^&*()+=_-/";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? LowerCase : "";
    allowedChars += includeUpperCase ? UpperCase : "";
    allowedChars += includeNumber ? Numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}

const passwordLength = 8;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber= true;
const includeSymbols = true;

const password = generatePassowrd(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);
console.log(password);