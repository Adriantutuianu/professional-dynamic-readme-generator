const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Can you describe the project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is table of content?",
    name: "content",
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the usage of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is the usage of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What license do you need?",
    name: "license",
  },
  {
    type: "input",
    message: "Who contribuited to this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your email address for questions request",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      //pass the userResponses to the generateMarkdown function.
      const markdown = generateMarkdown(userResponses);
      //specify the file name and write the file
      writeToFile("Generated-README.md", markdown);
      console.log("successfully generated Generated-README.md");
    })
    .catch((error) => {
      console.log("Error generating Readme: ", error);
    });
}

// function call to initialize program
init();
