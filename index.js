// prompt for text (3 characters)
// open 'logo.svg' file in browser shown 300x200 px that matches criteria

// video submission
// jest to test

const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter three characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Color of text',
        name: 'text-color',
    },
    {
        type: 'list',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
        name: 'shape',
    },
    {
        type: 'input'
        message: 'Color of shape'
        name: 'shape-color'
    }
  ])
  // logo.svg created
  fs.appendFile('logo.svg', `${data}\n`, (err) =>
    err ? console.error(err) : console.log('Added to logo.svg')
  );

  .then((response) =>
      ? console.log('Generated logo.svg')
  );