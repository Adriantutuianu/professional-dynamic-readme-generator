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
    message: "Do you have any questions?",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
