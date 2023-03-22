function takeHomeSalary(employeeType, salesPerMonth){
    let salary 
    let commission
    let totalSalary
    // console.log(employeeType)
    switch (employeeType) {
        case "SALARIED":
            salary = 150000;
            commission = 0;
            totalSalary = salary + commission
            return totalSalary
            break;

        case "COMMISSIONED":
            salary = 80000;
             commission = (8.5 * salesPerMonth)/100
             totalSalary = salary + commission
             return totalSalary;
            break;

        case "CONTRACT":
             salary= 0;
             commission = (40 * salesPerMonth)/100
             totalSalary = salary + commission
             return totalSalary;
            break;

        default:
            return `employeeType values is limited to 'SALARIED', 'COMMISSIONED', 'CONTRACT'`
            break;
    }
}

// let checkSalary = takeHomeSalary("CONTRACT", 500) 
// console.log(checkSalary)
