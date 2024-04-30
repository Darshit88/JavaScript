
function countNum() {
    let i = parseInt(prompt("Enter a number to start counting down:"));
    let rounds = 0;

    for (; i; i--) {
        rounds += 1;
    }

    console.log(`i:`, i);
    console.log(`rounds:`, rounds);
}

countNum();
