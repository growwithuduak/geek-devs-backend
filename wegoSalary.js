//object of all employeeType
const EmployeeType = {
    SALARIED: 'SALARIED',
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT'
}


// user' input validation 
const validateEmployeeType = (employeeType) => {
    if (typeof (employeeType) !== 'string') {
        throw new Error("EmployeeType must be a string data type")
    }

    if (!EmployeeType[employeeType]) {
        throw new Error("Not a valid employee type")
    }

}

const validateSalesPerMonth = (salesPerMonth) => {
    if (typeof (salesPerMonth) !== 'number') {
        throw new Error("SalesPerMonth must be a number")
    }

    if (salesPerMonth < 0) {
        throw new Error("SalesPerMonth can't be less than 0")
    }
}


const SALARIED_EMPLOYEE = () => {
    let baseSalary = 150000;
    return baseSalary
}

const COMMISSIONED_EMPLOYEE = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    let baseSalary = 80000;
    let commission = (0.085 * salesPerMonth);
    return baseSalary + commission;
}

const CONTRACT_EMPLOYEE = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    let commission = (0.4 * salesPerMonth);
    return commission;
}


//employee' salary computation logic
const employeeSalary = (employeeType, salesPerMonth) => {

    validateEmployeeType(employeeType)

    //salary logic
    if (employeeType === 'SALARIED') {
        return SALARIED_EMPLOYEE()
    }

    if (employeeType === 'COMMISSIONED') {
        return COMMISSIONED_EMPLOYEE(salesPerMonth)
    }

    if (employeeType === 'CONTRACT') {
        return CONTRACT_EMPLOYEE(salesPerMonth)
    }

    return 0
}



try {
    let checkSalary = employeeSalary('54', null)
    console.log(checkSalary)
} catch (error) {
    console.log(error.message)
}

