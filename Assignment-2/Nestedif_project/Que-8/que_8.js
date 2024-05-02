function incrmntSalary(salary) {
    let increment;

    if (salary >= 1000 && salary <= 5000) {
        increment = 1000;
    } else if (salary > 5000 && salary <= 10000) {
        increment = 2000;
    } else if (salary > 10000 && salary <= 20000) {
        increment = 3000;
    } else if (salary > 20000 && salary <= 50000) {
        increment = 4000;
    } else {
        increment = 0;
    }

    return salary + increment;
}

// Example usage:
let salary = parseFloat(prompt("Enter the salary:"));
let incrementedSalary = incrmntSalary(salary);
console.log("Incremented salary:", incrementedSalary);
