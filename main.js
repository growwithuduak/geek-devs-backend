const prompt = require("prompt-sync")();


const COMPANY_INFO = {
    EMPLOYEE_TYPE: ["SALARIED", "COMMISSIONED", "CONTRACT"],
    BASE_SALARY: [150000, 80000, null],
    COMMISSION_RATE: [null, 0.085, 0.40],
};

const {EMPLOYEE_TYPE, BASE_SALARY, COMMISSION_RATE} = COMPANY_INFO;




class salaryWageCalculator {
    
    constructor(_employeeType, _salesPerMonth) {
        this._employeeType = _employeeType;
        this._salesPerMonth = _salesPerMonth;
    };

    salariedEmployee = () => {
        try {
            if (!EMPLOYEE_TYPE.includes(this._employeeType)) throw new Error("Wrong input, expected value is 'SALARIED'");
            if (this._employeeType === EMPLOYEE_TYPE[0]) {
                let calculatedSalary = BASE_SALARY[0];
                return calculatedSalary;
            }
        } catch(e) {
            console.error(e);
        }
        
    };     

    salariedCommissioned = () => {
        try {
            if (!EMPLOYEE_TYPE.includes(this._employeeType)) throw new Error("Wrong input, expected value is 'COMMISSIONED'");
            if ((this._employeeType === EMPLOYEE_TYPE[1]) && (this._salesPerMonth >= 0)) {
                let calculatedSalary = BASE_SALARY[1] + (this._salesPerMonth * COMMISSION_RATE[1]);
                return calculatedSalary;
            }

        } catch(e) {
            console.error(e);
        }
        
    };

    salariedContract = () => {
        try {
            if (!EMPLOYEE_TYPE.includes(this._employeeType)) throw new Error("Wrong input, expected value is 'CONTRACT'");
            if ((this._employeeType === EMPLOYEE_TYPE[2]) && (this._salesPerMonth >= 0)) {
                let calculatedSalary = this._salesPerMonth * COMMISSION_RATE[2];
                return calculatedSalary;
            }
        } catch(e) {
            console.error(e);
        }
        
    };

}




// USAGE

// Test case1: salaried employee
let userInput1 = prompt("Enter appropriate employee type: ").toUpperCase();

let personnel1 = new salaryWageCalculator(userInput1, 1000);
console.log(personnel1.salariedEmployee());

// Test case2: commissioned employee
let userInput2 = prompt("Enter appropriate employee type: ").toUpperCase();

let personnel2 = new salaryWageCalculator(userInput2, 1000);
console.log(personnel2.salariedCommissioned());

// Test case3: contract employee
let userInput3 = prompt("Enter appropriate employee type: ").toUpperCase();

let personnel3 = new salaryWageCalculator(userInput3, 1000);
console.log(personnel3.salariedContract());