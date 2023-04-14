const {
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
} = require('../geek-devs-backend/wego')




test('Logic for salaried employee', () => {
    const salary = calculateEmployeeSalary(EmployeeTypes.SALARIED);
    const actualSalary = computeSalariedEmployeeSalary();
    expect(salary).toEqual(actualSalary);
}) 

test("logic for commissioned employee", () => {
    const salesPerMonth = 10000;
    const salary = calculateEmployeeSalary(EmployeeTypes.COMMISSIONED, salesPerMonth);
    
    expect(salary).toEqual(computeCommissionedEmployeeSalary(salesPerMonth));
});

test("logic for contract employee", () => {
    const salesPerMonth = 10000;
    const salary = calculateEmployeeSalary(EmployeeTypes.CONTRACT, salesPerMonth);
    
    expect(salary).toEqual(computeContractEmployeeSalary(salesPerMonth));
});

test('return an error for invalid employee type', () => {
    expect( () => employeeTypeValidation("employeeType")).toThrow(
        ErrorMessages.Invalid_Employee_Type
    )
})

test('return an error for invalid sales amount', () => {
    expect( () => salesPerMonthValidation("sales")).toThrow(
        ErrorMessages.Invalid_Sales_Per_Month
    )
})