// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        //input for title
        type: "input", message: "What is your project's title?", name: "title"
    },
    {
        //input for description
        type: "input", message: "How would you describe your project?", name: "description"
    },
    {
        //input for installation
        type: "input", message: "How do you install your application?", name: "installation"
    },
    {
        //input for usage
        type: "input", message: "How do you use your application?", name: "usage"
    },
    {
        //input for contributions
        type: "input", message: "How does contributing work?", name: "contributing"
    },
    {
        //input for testing
        type: "input", message: "How can someone do tests?", name: "tests"
    },
    {
        //input for username
        type: "input", message: "What is your GitHub username?", name: "username"
    },
    {
        //input for email
        type: "input", message: "What is your email?", name: "email"
    },
    {
        //input for license, did the main ones from here: https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633
        type: "list", message: "What license would you like?", name: "license",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    }
];

// TODO: Create a function to write README file
var fileName;
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {return console.log("Something did not work")}
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        fileName = "README.md";
        writeToFile(fileName, data)
        
    })
};

// Function call to initialize app
init();

