
function calculateGrossSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    
    const houseRentAllowance = 0.05 * basicSalary;
    const travelAllowance = 0.08 * basicSalary;
    const medicalAllowance = 0.07 * basicSalary;
    const totalAllowance = houseRentAllowance + travelAllowance + medicalAllowance;
    
    const grossSalary = basicSalary + totalAllowance - 200;
    
    document.getElementById('grossSalaryOutput').innerHTML = `Total Allowance = ${houseRentAllowance} (${basicSalary} * 0.05) + ${travelAllowance} (${basicSalary} * 0.08) + ${medicalAllowance} (${basicSalary} * 0.07) <br> Gross Salary = ${basicSalary} + ${totalAllowance} - 200 tax <br> Gross Salary = ${grossSalary.toFixed(2)} RS`;
}
z