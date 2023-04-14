const EmployeeTypes = {
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT',
    SALARIED: 'SALARIED'
    // Allows for new types to be entered and the way they can be identified
}

const EmployeeSalaryInfo ={
    SALARIED_BASE: 150000,
    CONTRACT_PERCENTAGE : 0.4,
    COMMISSIONED_BASE_SALARY : 80000,
    COMMISSIONED_PERCENTAGE: 0.085,
    
}

const ErrorMessages = {
    Invalid_Employee_Type: "Please enter a valid employee type",
    Invalid_Sales_Per_Month: "Please enter a valid amount for the sales generated per month "
}

const employeeTypeValidation = (employeeType) => {
    if(!EmployeeTypes[employeeType]) {
        throw new Error(ErrorMessages.Invalid_Employee_Type)
    }
}

const salesPerMonthValidation =(salesPerMonth) => {
    if(typeof(salesPerMonth) !== 'number' || salesPerMonth < 0) {
        throw new Error(ErrorMessages.Invalid_Sales_Per_Month)
    }
}

const computeAllEmployeesSalary = (baseSalary, percentage, salesPerMonth) => {
    return baseSalary + ( percentage * salesPerMonth)
}

const computeSalariedEmployeeSalary = () => {
    return computeAllEmployeesSalary(
        EmployeeSalaryInfo.SALARIED_BASE,
        0,
        0)
}

const computeCommissionedEmployeeSalary = (salesPerMonth) =>{
    salesPerMonthValidation(salesPerMonth);
    return computeAllEmployeesSalary(
        EmployeeSalaryInfo.COMMISSIONED_BASE_SALARY, 
        EmployeeSalaryInfo.COMMISSIONED_PERCENTAGE,
        salesPerMonth
    )
}

const computeContractEmployeeSalary = (salesPerMonth) => {
	salesPerMonthValidation(salesPerMonth);
	return computeAllEmployeesSalary(
		0,
		EmployeeSalaryInfo.CONTRACT_PERCENTAGE,
		salesPerMonth
	)
}

const calculateEmployeeSalary = (employeeType, salesPerMonth) => {
    employeeTypeValidation(employeeType);

    
	if (employeeType === EmployeeTypes.SALARIED) {
		return computeSalariedEmployeeSalary();
	}

	if (employeeType === EmployeeTypes.COMMISSIONED) {
		return computeCommissionedEmployeeSalary(salesPerMonth);
	}

	if (employeeType === EmployeeTypes.CONTRACT) {
		return computeContractEmployeeSalary(salesPerMonth);
	}
    return 0;
}

module.exports = {
    EmployeeSalaryInfo,
    ErrorMessages,
    EmployeeTypes,
    salesPerMonthValidation,
    employeeTypeValidation,
    calculateEmployeeSalary, 
    computeAllEmployeesSalary,
    computeCommissionedEmployeeSalary, 
    computeSalariedEmployeeSalary,
    computeContractEmployeeSalary
}

console.log(calculateEmployeeSalary('SALARIED', 880))