function findDay(input) {
    let day;

    switch (input) {
        case 'M':
            day = "Monday";
            break;
        case 'T':
            day = "Tuesday";
            break;
        case 'W':
            day = "Wednesday";
            break;
        case 'Th':
            day = "Thursday";
            break;
        case 'F':
            day = "Friday";
            break;
        case 'S':
            day = "Saturday";
            break;
        case 'Su':
            day = "Sunday";
            break;
        default:
            day = "Invalid input";
    }

    return day;
}

let userInput = prompt("Enter a day (M, T, W, Th, F, S, Su):");
let dayOfWeek = findDay(userInput);
console.log("Output:", dayOfWeek);
