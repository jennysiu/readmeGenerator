import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import util from "util";

import generateMarkdown from "../../utils/generateMarkdown.js";

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    // {
    //   type: "input",
    //   name: "name",
    //   message: "What's the title of your project?"
    // }
    // ,
    // {
    //   type: "input",
    //   name: "description",
    //   message: "Write a brief description of your project"
    // },
    // {
    //   type: "checkbox",
    //   name: "tableOfContents",
    //   message: "Please select the sections you want to include in your README's table of contents",
    //   choices: [
    //     "Title",
    //     "Description",
    //     "Installation",
    //     "Usage",
    //     "License",
    //     "Contributing",
    //     "Contact"
    //   ]
    // },
    // {
    //   type: "input",
    //   name: "installation",
    //   message: "What are the installation requirements to run this application? Provide step-by-step"
    // },
    // {
    //   type: "checkbox",
    //   name: "usage",
    //   message: "What usage information would you like to provide users?",
    //   choices: [
    //     "Step-by-step instructions",
    //     "Screenshots",
    //     "GIFs"
    //   ]
    // },
    {
      type: "list",
      name: "license",
      message: "Which license have you chosen for your project?",
      choices: [
        "MIT License (MIT)",
        "GNU General Public License v3.0 (GPL-3.0)",
        "Apache License 2.0 (Apache-2.0)"
      ]
    }
    ,
    {
      type: "input",
      name: "contribution",
      message: "How can others contribute to your project? Please provide guidelines for contributions."
    },
    {
      type: "checkbox",
      name: "contacts",
      message: "How can users reach out with questions or issues? Which contact details do you want to provide?.",
      choices: [
        {name: 'Email', value: 'email'},
        {name: 'GitHub', value: 'github'},
        {name: 'LinkedIn', value: 'linkedin'}
      ]
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address:',
      when: answers => answers.contacts.includes('email')
    },
    {
      type: 'input',
      name: 'githubUrl',
      message: 'Please provide your GitHub URL:',
      when: answers => answers.contacts.includes('github')
    },
    {
      type: 'input',
      name: 'linkedinUrl',
      message: 'Please provide your LinkedIn URL:',
      when: answers => answers.contacts.includes('linkedin')
    }
  ]);
};

// todo: function to write README file (look into changing to arrow function)
async function writeToFile(fileName, answers) {
  console.log("starting write to file function")

  try {
    // store generateMarkdown(answers) in variable readme
    const readme =  generateMarkdown(answers);

    // function to write readme into file
    await writeFileAsync(fileName, readme);
    console.log("Successfully wrote to README.md")
  } catch (err) {
    console.log(err);
  }
}

// function to initialize program
const init = async() => {
  console.log("Hello, please answer the following questions to generate your README.");
  try {
    // store answers from promptUser into answers variable
    const answers = await promptUser();
    
    // run function begin write to file with designated file path and data as parameter
    await writeToFile("../../output/README.md", answers);
    // check to see function is successful up to this point
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
