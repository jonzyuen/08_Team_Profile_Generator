const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Name', 546546541, 'emailemail@gmail.com', 'githubname');

    expect(engineer.name).toBe('Name');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("gets engineer's github id", () => {
    const engineer = new Engineer('Name', 546546541, 'emailemail@gmail.com', 'githubname');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})


test('gets engineer role as object', () => {
    const engineer = new Engineer('Name', 546546541, 'emailemail@gmail.com', 'githubname');

    expect(engineer.getRole()).toBe("Engineer");
})