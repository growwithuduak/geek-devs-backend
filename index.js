const prompt = require("prompt-sync")();

const salaryWageCalculator = (employeeType, _salesPerMonth) => {
    if (employeeType === 'SALARIED') { 
        var baseSalary = 150000;
        var calculatedSalary = baseSalary;
    };

    if (employeeType === 'COMMISSIONED') {
        var baseSalary = 80000;
        var calculatedSalary = baseSalary + (_salesPerMonth * 0.085);
    };

    if (employeeType === 'CONTRACT') {
        var calculatedSalary = _salesPerMonth * 0.40;
    };

    return `${calculatedSalary} per month`;
}

let userInput = prompt("Enter value: ").toUpperCase();
console.log(salaryWageCalculator(userInput, 1000));
