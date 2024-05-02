function checkCharacterType(character) {
   
    let alphabetRegex = /^[a-zA-Z]$/;
    let digitRegex = /^[0-9]$/;

    if (alphabetRegex.test(character)) {
        return "Alphabet";
    } else if (digitRegex.test(character)) {
        return "Digit";
    } else {
        return "Special Character";
    }
}

let inputCharacter = prompt("Enter any character:");
let characterType = checkCharacterType(inputCharacter);

console.log("Character Type:", characterType);
