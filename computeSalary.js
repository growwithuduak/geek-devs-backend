const SalaryMap = {
  CONTRACT: 0.4,
  COMMISSIONED_BASESALARY: 80000,
  COMMISSIONED_PERCENTAGE: 0.085,
  SALARIED: 150000,
};

const EmployeeType = {
  COMMISSIONED: "COMMISSIONED",
  CONTRACT: "CONTRACT",
  SALARIED: "SALARIED",
};
const ErrorMsg = {
  INVALID_SALES_PER_MONTH: "sales-per-month must be not be less than 0 ",
  INVALID_EMPLOYEE_TYPE: "enter a valid employee type",
};

const salesPerMonthValidation = (salesPerMonth) => {
  if (isNaN(salesPerMonth) || salesPerMonth < 0) {
    throw new Error(ErrorMsg.INVALID_SALES_PER_MONTH);
  }
};
const employeeTypeValidation = (employeeType) => {
  if (!EmployeeType[employeeType]) {
    throw new Error(ErrorMsg.INVALID_EMPLOYEE_TYPE);
  }
};

const computeAllEmployeeSalary = (baseSalary, commission, salesPerMonth) =>
  baseSalary + commission * salesPerMonth;

const computeSalariedEmployeeSalary = () => {
  return computeAllEmployeeSalary(SalaryMap.SALARIED, 0, 0);
};

const computeComissionedEmployeeSalary = (salesPerMonth) => {
  salesPerMonthValidation(salesPerMonth);
  return computeAllEmployeeSalary(
    SalaryMap.COMMISSIONED_BASESALARY,
    SalaryMap.COMMISSIONED_PERCENTAGE,
    salesPerMonth
  );
};

const computeContractEmployeeSalary = (salesPerMonth) => {
  salesPerMonthValidation(salesPerMonth);
  return computeAllEmployeeSalary(0, SalaryMap.CONTRACT, salesPerMonth);
};

const computeSalary = (employeeType, salesPerMonth) => {
  employeeTypeValidation(employeeType);

  if (employeeType === EmployeeType.SALARIED) {
    return computeSalariedEmployeeSalary();
  }

  if (employeeType === EmployeeType.COMMISSIONED) {
    return computeComissionedEmployeeSalary(salesPerMonth);
  }

  if (employeeType === EmployeeType.CONTRACT) {
    return computeContractEmployeeSalary(salesPerMonth);
  }

  return 0;
};

module.exports = {
  SalaryMap,
  EmployeeType,
  ErrorMsg,
  salesPerMonthValidation,
  employeeTypeValidation,
  computeAllEmployeeSalary,
  computeSalariedEmployeeSalary,
  computeComissionedEmployeeSalary,
  computeContractEmployeeSalary,
  computeSalary,
};
