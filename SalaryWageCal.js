function validateUserInput(employeeType, salesPerMonth){

    if (!employeeType || !salesPerMonth){
     throw new Error ("Please enter value for employeeType and salesPerMonth")
    }
    
   

    if(typeof(employeeType) !== 'string'){
        throw new Error ("EmployeeType must be a string")
    }
 
    if(typeof(salesPerMonth) !== 'number'|| isNaN(salesPerMonth)){
      throw new Error('SalesPerMonth, must be a number')
    }

    if(salesPerMonth < 0){
        throw new Error ("SalesPermonth cant be less than 0")
    }
}



function takeHomeSalary(employeeType, salesPerMonth){

    validateUserInput(employeeType, salesPerMonth)

    //set global variables
    let basedSalary 
    let commission
    let totalSalary

    switch (employeeType.toUpperCase()) {
        case "SALARIED":
            basedSalary = 150000;
            commission = 0; // since based employees have no commissin
            totalSalary = basedSalary + commission
            return `#${totalSalary}`
            break;

        case "COMMISSIONED":
            basedSalary = 80000; 
             commission = (8.5 * salesPerMonth)/100
             totalSalary = basedSalary + commission
             return `#${totalSalary}`;
            break;

        case "CONTRACT":
            basedSalary= 0; // contract staff has no based salary
             commission = (40 * salesPerMonth)/100
             totalSalary = basedSalary + commission
             return `#${totalSalary}`;
            break;

        default:
            return `employeeType values is limited to 'SALARIED', 'COMMISSIONED', 'CONTRACT'` 
            break;
    }
}

try {
    let checkSalary = takeHomeSalary('contract', 1) 
    console.log(checkSalary)  
} catch (error) {
    console.log(error.message)
} 

