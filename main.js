const prompt = require("prompt-sync")();


class salaryWageCalculator {
    
    constructor(_employeeType, _salesPerMonth) {
        this._employeeType = _employeeType;
        this._salesPerMonth = _salesPerMonth;
    };


    salariedEmployee = () => {
        if (this._employeeType === 'SALARIED') {
            const baseSalary = 150000;
            let calculatedSalary = baseSalary;
            console.log(`${calculatedSalary} per month`);
        }
    };

    salariedCommissioned = () => {
        if (this._employeeType === 'COMMISSIONED') {
            const baseSalary = 80000;
            let calculatedSalary = baseSalary + (this._salesPerMonth * 0.085);
            console.log(`${calculatedSalary} per month`);
        };
    };

    salariedContract = () => {
        if (this._employeeType === 'CONTRACT') {
            let calculatedSalary = this._salesPerMonth * 0.40;
            console.log(`${calculatedSalary} per month`);
        };
    };

}




// Usage
let userInput = prompt("Enter employee ").toUpperCase();
let personnel = new salaryWageCalculator(userInput, 1000);

personnel.salariedEmployee();
personnel.salariedCommissioned();
personnel.salariedContract();
