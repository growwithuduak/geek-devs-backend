const {
  EmployeeType,
  ErrorMsg,
  employeeTypeValidation,
  salesPerMonthValidation,
  computeSalariedEmployeeSalary,
  computeComissionedEmployeeSalary,
  computeContractEmployeeSalary,
  computeSalary,
} = require("./computeSalary");


test("returns the correct salary for a salaried employee", () => {
  const salary = computeSalary(EmployeeType.SALARIED);
  const expectedSalary = computeSalariedEmployeeSalary();
  expect(salary).toEqual(expectedSalary);
});

test("returns the correct salary for a commissioned employee", () => {
  const salesPerMonth = 50000;
  const salary = computeSalary(EmployeeType.COMMISSIONED, salesPerMonth);
  const expectedSalary = computeComissionedEmployeeSalary(salesPerMonth);
  expect(salary).toEqual(expectedSalary);
});

test("returns the correct salary for a contract  employee", () => {
  const salary = computeSalary(EmployeeType.CONTRACT, 50000);
  const expectedSalary = computeContractEmployeeSalary(50000);
  expect(salary).toEqual(expectedSalary);
});

test("throw an error for invalid employee type", () => {
  expect(() => employeeTypeValidation("invalid-employee")).toThrow(
    ErrorMsg.INVALID_EMPLOYEE_TYPE
  );
});

test("throw an error for invalid sales-per-month", () => {
  expect(() => salesPerMonthValidation(-2)).toThrow(
    ErrorMsg.INVALID_SALES_PER_MONTH
  );
});

