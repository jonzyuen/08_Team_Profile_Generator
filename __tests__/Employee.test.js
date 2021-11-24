const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(employee.name).toBe('DName');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee's name", () => {
    const employee = new Employee('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee's ID", () => {
    const employee = new Employee('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets employee's Email", () => {
    const employee = new Employee('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(employee.getEmail()).toEqual(expect.any(String));
})


test('gets employee role as object', () => {
    const employee = new Employee('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(employee.getRole()).toBe("Employee");
})