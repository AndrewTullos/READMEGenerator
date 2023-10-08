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
];

// console.log("Hello, World!");


// // // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }

// // TODO: Create a function to initialize app
function init() {
    // Create a README inside of folder 'dist'
    fs.mkdir('dist', (err) => {
        if (err) throw err;

        // // After the directory is created, write to a README file inside it
        // fs.writeFile('./dist/README.md', 'README init.', (err) => {
        // if (err) throw err;
        // });
    });

    inquirer.prompt(questions).then((answers) => {
    console.log("Creating your professional README.md file. Please allow for 3-4  minutes to generate");
    writeToFile("./dist/README.md", generateMarkdown({ ...answers }));
    });
}
init();

