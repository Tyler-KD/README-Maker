// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",        
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project:",
        name: "description",        
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",        
    },
    {
        type: "input",
        message: "Provide instructions and examples for use:",
        name: "usage",        
    },
    {
        type: "list",
        message: "Which license is your application covered under?",
        name: "license",  
        choices: ["MIT", "Apache2.0", "GNUGeneralPublicLicensev3.0", "BSD2", "BSD3", "BoostSoftwareLicense1.0", "CreativeCommonsZerov1.0", "EclipsePublicLicense2.0", "none"],    
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles:",
        name: "contributing",        
    },
    {
        type: "input",
        message: "Write tests for your application and provide examples on how to run them here:",
        name: "tests",        
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "author",        
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email",        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log("Making Professional README.md File...");
        writeToFile("./lib/README.md", data);
    });
}

// Function call to initialize app
init();