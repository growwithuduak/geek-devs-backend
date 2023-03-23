function calculateEmployeeSalary(employeeType, salesPerMonth) {

    let monthlySalary = 0;
    let commissionedPay = (80000 + (0.085 * salesPerMonth));
    let contractPay = 0.4 * salesPerMonth;

    if (employeeType === 'SALARIED') {
      monthlySalary = 150000;
    } else if (employeeType === 'COMMISSIONED') {
      monthlySalary = commissionedPay;
    } else if (employeeType === 'CONTRACT') {
      monthlySalary = contractPay;
    } else {
      return('Please enter a valid employee type');
    }
    return(monthlySalary);
  };