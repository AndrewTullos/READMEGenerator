// // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// // // TODO: Create an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "none"],
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe your testing?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    }
];

// // // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }

// // TODO: Create a function to initialize app
function init() {
    // Create a README inside of folder 'dist'
    fs.mkdir('dist', (err) => {
        if (err) throw err;
    });

    inquirer.prompt(questions).then((answers) => {
    console.log("Creating your professional README.md file. Please allow for 3-4  minutes to generate");
    writeToFile("./dist/README.md", generateMarkdown({ ...answers }));
    });
}
init();

