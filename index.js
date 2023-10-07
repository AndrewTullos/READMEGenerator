// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?",
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'table',
        message: 'Please list a table of contents',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List out any contributors and source material.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    },
    {
        type: 'input',
        name: 'badges',
        default: 'jsBadge',
        message: 'Please list any badges to contribute. (Will default to Javascript badge)',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([
        /* Pass your questions in here */
        prompt(questions).then()
])
    .then((answers) => {
    // Use user feedback for... whatever!!
})
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }   else {
        // Something else went wrong
    }
    });
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
console.log(process.argv);