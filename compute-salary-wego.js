// logic to compute the take-home salary of any sales employee at WEGO.

const computeSalary = (employeeType, salesPerMonth) => {
  
  // constants for the base salaries and commisions/contract rates for each employeeType
  const BASESALARY_SALARIED = 150000;
  const BASESALARY_COMMISSIONED = 80000;
  const COMMISSION_RATE = 0.085; // 8.5%
  const CONTRACT_RATE = 0.4; // 40%

  // checks if salesPerMonth is provided and a number
  const salesPerMonthValidation = () => {
    if (!salesPerMonth) {
      throw new Error("sales-per-month must be provided");
    }
    if (isNaN(salesPerMonth) || salesPerMonth <= 0) {
      throw new Error("sales-per-month must be a positive number");
    }
  };

  // handle each employeeType, if there's more emmployeeType, it can always be updated here
  if (employeeType === "SALARIED") {
    return BASESALARY_SALARIED;
  }

  if (employeeType === "COMMISSIONED") {
    salesPerMonthValidation();
    const commission = salesPerMonth * COMMISSION_RATE;
    const monthlyPay = BASESALARY_COMMISSIONED + commission;
    return monthlyPay;
  }

  if (employeeType === "CONTRACT") {
    salesPerMonthValidation();
    const monthlyPay = salesPerMonth * CONTRACT_RATE;
    return monthlyPay;
  }

  // if employeeType is not valid
  throw new Error("invalid employee type");

  /*if (!["SALARIED", "COMMISSIONED", "CONTRACT"].includes(employeeType)) {
    throw new Error("invalid employee type");
  } */
};