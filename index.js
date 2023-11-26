// prompt for text (3 characters)
// prompt for text color (keyword or hexidecimal)
// prompt for shape, presented with list (circle, triangle, square)
// prompt for shape color (keyword or hexidecimal)
// SVG file created named 'logo.svg' ('Generated logo.svg' is printed command line)
// open 'logo.svg' file in browser shown 300x200 px that matches criteria

// video submission
// jest to test
// inquirer 8.2.4

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter three characters',
        name: 'text',
    },
    {
        type: 'choice',
        message: 'Color of text',
        name: 'text-color',
    },
    {
        type: 'choice',
        message: 'Choose shape',
        name: 'shape',
    },
    {
        type: 'choice'
        message: 'Color of shape'
        name: 'shape-color'
    }
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

  shapes = [{
    type: 'list',
    name: 'shape',
    message: 'Choose shape :',
    choices: ['circle', 'triangle', 'square'],
    //default: 'square'
}