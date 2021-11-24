const createTeam = team => {
  const template = [];

  const createManager = manager => {
    return `
      <div class='row row-cols-1 row-cols-md-3 g-4'>
        <div class='col'>
          <div class='card h-100' id='manager' style='width: 18rem;'>
            <div class='card-body title'>
              <h2 class='card-title name'>
                ${manager.getName()}
              </h2>
              <h3 class='card-title position'>
                <i class='fas fa-mug-hot'> </i>${manager.getRole()}
              </h3>
            </div>
            <div class='card-body content'>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>
                  ID: ${manager.getId()}
                </li>
                <li class='list-group-item'>Email: 
                  <a href='mailto:${manager.getEmail()}'>
                    ${manager.getEmail()}
                  </a>
                </li>
                <li class='list-group-item'>
                  Office Number: ${manager.getOfficeNumber()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  };

  const createEngineer = engineer => {
    return `
      <div class='col'>
        <div class='card h-100' id='engineer' style='width: 18rem;'>
          <div class='card-body title'>
            <h2 class='card-title name'>
              ${engineer.getName()}
            </h2>
            <h3 class='card-title position'>
              <i class='fas fa-glasses'> </i>${engineer.getRole()}
            </h3>
          </div>
          <div class='card-body content'>
            <ul class='list-group list-group-flush'>
              <li class='list-group-item'>
                ID: ${engineer.getId()}
              </li>
              <li class='list-group-item'>
                Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a>
              </li>
              <li class='list-group-item'>
                Github: ${engineer.getGithub()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    `
  };

  const createIntern = intern => {
    return `<div class='col'>
      <div class='card h-100' id='intern' style='width: 18rem;'>
          <div class='card-body title'>
              <h2 class='card-title name'>${intern.getName()}</h2>
              <h3 class='card-title position'><i class='fas fa-user-graduate'> </i>${intern.getRole()}</h3>
          </div>
          <div class='card-body content'>
          <ul class='list-group list-group-flush'>
              <li class='list-group-item'>ID: ${intern.getId()}</li>
              <li class='list-group-item'>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a>
              </li>
              <li class='list-group-item'>School: ${intern.getSchool()}</li>
          </ul>
          </div>
      </div>
  </div>`
  }

  template.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => createManager(manager))
  );
  template.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => createEngineer(engineer))
    .join('')
  );
  template.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => createIntern(intern))
    .join('')
  );


  return template.join('');
};


function createHtml(team) {
  return `<!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
      <link rel='stylesheet' href='./style.css' />

      <title>Team Profile</title>
    </head>

    <body>
      <div class='px-4 py-5 my-5 text-center'>
        <header class='px-4 py-5 my-5 text-center danger'>
        <h1 class='display-5 fw-bold'>My Team</h1>
        </header>
      </div>
      <div class='container'>
        ${createTeam(team)}
      </div>
    </body>
  </html>
  `
};

module.exports = createHtml;