const prompt = require("prompt-sync")();


const COMPANY_INFO = {
    EMPLOYEE_TYPE: ["SALARIED", "COMMISSIONED", "CONTRACT"],
    BASE_SALARY: [150000, 80000, null],
    COMMISSION_RATE: [null, 0.085, 0.40],
};

const {EMPLOYEE_TYPE, BASE_SALARY, COMMISSION_RATE} = COMPANY_INFO;




const salaryWageCalculator = (_employeeType, _salesPerMonth) => {
    try {
        let calculatedSalary;

        if (!EMPLOYEE_TYPE.includes(_employeeType)) throw new Error("Wrong input, expected value is any of 'SALARIED', 'COMMISSIONED' or 'CONTRACT'");
        
        if (_employeeType === 'SALARIED') { 
            calculatedSalary = BASE_SALARY[0];
            
        };
    
        if ((_employeeType === 'COMMISSIONED') && (_salesPerMonth >= 0)) {
            calculatedSalary = BASE_SALARY[1] + (_salesPerMonth * COMMISSION_RATE[1]);
        };
    
        if ((_employeeType === 'CONTRACT') && (_salesPerMonth >= 0)) {
            calculatedSalary = _salesPerMonth * COMMISSION_RATE[2];
        };
    
        return calculatedSalary;

    } catch(e) {
        console.error(e);
    }
}




//USAGE
let userInput = prompt("Enter appropriate employee type: ").toUpperCase();
console.log(salaryWageCalculator(userInput, 1000));