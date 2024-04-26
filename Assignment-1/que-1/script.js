// pattern-1

const size = 5;

console.log("Pattern 1");
for (let i = 0; i < size; i++) {
    let row = '';

    for (let j = 0; j <= size; j++) {
        if ((i === 0 && (j === 3 || j === 5)) ||
            (i === 1 && (j === 2 || j === 4)) ||
            (i === 2 && (j === 1 || j === 3)) ||
            (i === 3 && (j === 2 || j === 4)) ||
            (i === 4 && (j === 3 || j === 5))) {
            row += '*   ';
        } else {
            row += '    ';
        }
    }
    console.log(row);
}


// pattern-2


const s = 8;

console.log("Pattern 2");
for (let i = 0; i < 7; i++) {
    let row = '';
    for (let j = 1; j <= s; j++) {
        if ((i === 0 && (j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8)) ||
            (i === 2 && (j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8)) ||
            (i === 3 && (j === 1 || j === 3 || j === 8)) ||
            (i === 4 && (j === 1 || j === 3 || j === 5 || j === 6 || j === 7 || j === 8)) ||
            (i === 5 && (j === 1 || j === 3 || j === 5 || j === 7 || j === 8)) ||
            (i === 6 && (j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8))) {
            row += '*   ';
        } else {
            row += '    ';
        }
    }
    console.log(row);
}
