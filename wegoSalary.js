//object of all employeeType
const EmployeeType = {
    SALARIED: 'SALARIED',
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT'
}


const EmployeeSalary = {
    salariedBaseSalary: 150000,
    commissionedBaseSalary: 80000,
    commissionedRate: 0.085,
    contractRate: 0.4
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
    let baseSalary = EmployeeSalary.salariedBaseSalary;
    return baseSalary
}

const COMMISSIONED_EMPLOYEE = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    let baseSalary = EmployeeSalary.commissionedBaseSalary;
    let commission = (EmployeeSalary.commissionedRate * salesPerMonth);
    return baseSalary + commission;
}

const CONTRACT_EMPLOYEE = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    let commission = (EmployeeSalary.contractRate * salesPerMonth);
    return commission;
}


//employee' salary computation logic
const computeEmployeeSalary = (employeeType, salesPerMonth) => {

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



// try {
//     let checkSalary = employeeSalary('54', null)
//     console.log(checkSalary)
// } catch (error) {
//     console.log(error.message)
// }

module.exports = {
    EmployeeType,
    EmployeeSalary,
    SALARIED_EMPLOYEE,
    CONTRACT_EMPLOYEE,
    COMMISSIONED_EMPLOYEE,
    computeEmployeeSalary,
    validateEmployeeType,
    validateSalesPerMonth
}
