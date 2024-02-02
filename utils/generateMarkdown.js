// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// todo: create markdown template - to be used later in template literal
// todo: * When a user enters the project title then it is displayed as the title of the README

// todo: When a user enters a description, installation instructions, usage information, contribution guidelines,
//  and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, 
//  Contributing, and Tests

// todo: When a user chooses a license for their application from a list of options then a badge for that
//  license is added near the top of the README and a notice is added to the section of the README 
//  entitled License that explains which license the application is covered under

// todo: When a user enters their GitHub username then this is added to the section of the README entitled 
// Questions, with a link to their GitHub profile

// todo: When a user enters their email address then this is added to the section of the README entitled Questions, with
//  instructions on how to reach them with additional questions

// todo: When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README