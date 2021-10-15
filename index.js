// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a short description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the install instructions for your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose one of the following licenses that your project will be using:',
        name: 'license',
        choices: ['GPL', 'MIT', 'BSD', 'Apache']
    },
    {
        type: 'input',
        message: 'How could someone contribute to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What are the steps for testing this project?',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'Link to your github',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email address',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
    console.log('README.md was created');
    });
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await inquirer.prompt(questions)
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers))
}

// Function call to initialize app
init();
