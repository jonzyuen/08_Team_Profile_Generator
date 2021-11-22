const inquirer = require('inquirer');
const jest = require('jest');

let team = [];

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id
  }

  getEmail() {
    return this.email
  }
}

new Manager(input.managerName, input.managerId, input.managerEmail, input.managerOfficeNumber);

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'enter name'
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  },
  {
    type: '',
    name: '',
    message: ''
  }
])
  .then(input => {
    console.log(input);

    let newEmployee = new Employee(input.name, input.id, input.email);

    team.push(newEmployee);

    fs.writeFile('employee.json', JSON.stringify(team, null, 2), () => {
      console.log('Done')
    });
  });

module.exports = Employee