// Write your solution in this file!

const employee = { name : "Jon Wilson", streetAddress : "37 Park St"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key] : value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = Object.assign({}, employee)
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}