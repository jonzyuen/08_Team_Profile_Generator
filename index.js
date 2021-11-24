const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./src/page-template.js');

const createTeam = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const promptsManager = () => {

  console.log('Creating Team');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter team manager name',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check team manager name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter team manager employee ID',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check team manager employee ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter team manager email',
      default: () => { },
      validate: function (email) {
        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);

        if (valid) {
          return true;
        } else {
          console.log('Enter a valid email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter team manager office number',

      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check team manager office number');
          return false;
        }
      }
    }
  ])
    .then(answers => {
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      team.push(manager);
      promptsMain();
    });
};

const promptsEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter engineer name',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check engineer name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter engineer employee ID',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check engineer employee ID');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter engineer email',
      default: () => { },
      validate: function (email) {

        valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);

        if (valid) {
          return true;
        } else {
          console.log('Enter a valid email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter engineer GitHub username',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check engineer GitHub username');
          return false;
        }
      }
    }
  ])
    .then((answers) => {
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(engineer);
      promptsMain();
    });
};

const promptsIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter intern name?',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check intern name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter intern employee ID?',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Check intern employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern\'s email?',
      default: () => { },
      validate: function (email) {

        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (valid) {
          return true;
        } else {
          console.log('Please enter a valid email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern\'s school?',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter intern\'s school!');
          return false;
        }
      }
    }
  ])
    .then((answers) => {
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      promptsMain();
    });
};
const promptsMain = () => {
  inquirer.prompt({
    type: 'list',
    name: 'main',
    message: 'Add members to the team',
    choices: ['add engineer', 'add intern', 'finish building the team']
  })
    .then((answers) => {
      if (answers.main === 'add engineer') {
        console.log(answers.main)
        return promptsEngineer();
      } else if (answers.main === 'add intern') {
        return promptsIntern();
      } else {
        return generateTeam(team);
      }
    })
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created'
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created'
      });
    });
  });
};

generateTeam = (team) => {
  var pageHTML = createTeam(team);

  writeFile(pageHTML)
    .then(writeFileRes => {
      console.log(writeFileRes);
      return copyFile();
    })
    .then(copyFileRes => {
      console.log(copyFileRes);
    })
    .catch(err => {
      console.log(err);
    });
}

promptsManager()