
const {
    EmployeeType,
    EmployeeSalary,
    computeEmployeeSalary,
    validateEmployeeType,
    validateSalesPerMonth } = require("../wegoSalary");


test('should return baseSalary of salaried employee (150000)', () => {
    const salary = computeEmployeeSalary(EmployeeType.SALARIED)
    expect(salary).toBe(EmployeeSalary.salariedBaseSalary)
})

test('should return sum of baseSalary and Commission', () => {
    const salesPerMonth = 50000
    const salary = computeEmployeeSalary(EmployeeType.COMMISSIONED, salesPerMonth)
    expect(salary).toBe(84250)
})

test('should return commission only', () => {
    const salesPerMonth = 100000
    const salary = computeEmployeeSalary(EmployeeType.CONTRACT, salesPerMonth)
    expect(salary).toBe(40000)
})

describe("Validate employeeType", () => {
    it('validate employeeType Data type', () => {
        expect(() => validateEmployeeType(null)).toThrow("EmployeeType must be a string data type")
    })

    it('validate employeeType entered', () => {
        expect(() => validateEmployeeType("STAFF")).toThrow("Not a valid employee type")
    })
})

describe("Validate salepermonth", () => {
    it('validate sales per month data type', () => {
        expect(() => validateSalesPerMonth("Hello")).toThrow("SalesPerMonth must be a number")
    })

    it('validate sales per month data type', () => {
        expect(() => validateSalesPerMonth(-10)).toThrow("SalesPerMonth can't be less than 0")
    })
})


