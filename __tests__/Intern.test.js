const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(intern.name).toBe('Name');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school", () => {
    const intern = new Intern('Name', 546546541, 'emailemail@gmail.com', 'CSN');

    expect(intern.getschool()).toEqual(expect.any(String));
})


test('gets intern role as object', () => {
    const intern = new Intern('Name', 546546541, 'emailemail@gmail.com', 78974546);

    expect(intern.getRole()).toBe("Intern");
})