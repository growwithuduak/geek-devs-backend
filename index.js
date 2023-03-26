function salesPerMonthValidation(salesPerMonth) {
    if (isNaN(salesPerMonth) || salesPerMonth < 0) {
        throw new Error('Please enter the valid amount generated for the month');
    }
}

function calculateEmployeeSalary(employeeType, salesPerMonth) {
    let monthlySalary;
    let commissionedPay = 80000 + (0.085 * salesPerMonth)
    let contractPay = 0.4 * salesPerMonth;

    if (employeeType === 'SALARIED') {
        return(monthlySalary = 150000);
    } else if (employeeType === 'COMMISSIONED') {
        salesPerMonthValidation(salesPerMonth);
        return(monthlySalary = commissionedPay);
    } else if (employeeType === 'CONTRACT') {
        salesPerMonthValidation(salesPerMonth);
        return(monthlySalary = contractPay)
    } else {
        throw new Error('Please enter a valid employee type');
    }
}
