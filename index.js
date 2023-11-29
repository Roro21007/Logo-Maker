// prompt for text (3 characters)
// open 'logo.svg' file in browser shown 300x200 px that matches criteria
// make shapes?
// write newdata to file
// file opens to show logo

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
  fs.writeFile('logo.svg', `${data}\n`, (err) =>
    err ? console.error(err) : console.log('Added to logo.svg')

    function Logo(text, text-color, shape, shape-color) {
        this.text = text;
        this.text-color = text-color;
        this.shape = shape;
        this.shape-color = shape-color;
    }
  );

  .then((response) =>
      ? console.log('Generated logo.svg')
  );