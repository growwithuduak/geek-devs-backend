const employeeSalaryCalculator = (employeeType, salesPerMonth) => {
    if (employeeType === 'SALARIED') {
        const salaryPerMonth = 150000
        return salaryPerMonth
    } if (employeeType === 'COMISSIONED') {
        const salaryPerMonth = ( 80000 + (0.085* salesPerMonth))
        return salaryPerMonth
    } else if ( employeeType === 'CONTRACTED') {
        const salaryPerMonth = (0.4 * salesPerMonth)
        return salaryPerMonth
    } else {
        console.log(' ENTER A VALID EMPLOYEE TYPE: ')
    }
   
}

let salary = employeeSalaryCalculator('COMISSIONED', 10000)
console.log(salary)