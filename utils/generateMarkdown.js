import .meta.dirname. from "../../assets/licenses/"

// function to generate markdown for README
export default function generateMarkdown(answers) {
  if (answers) {
  // console.log(answers.name)
  return `# ${answers.name}

  ## Table of Contents
  
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Contrinutions](#contrinutions)
  - [Contact](#contact)
  
  
  ## Description
  ${answers.description}
  

  ## Features
  ${answers.features}
  
  
  ## Installation
  ${answers.installation}
  
  
  ## Usage
  ${answers.usage}  


  ## Technologies Used
  ${answers.usage}    
  
  
  ## License
  ${renderLicenseSection(answers.license)} 
  
  ## Acknowledgments
  ${answers.acknowledgments} 


  ## Contribtution
  ${answers.contribution}
  

  ## Contact
  If you have any questions, please reach me via:

  ${answers.email} 
  ${answers.githubUrl} 
  ${answers.linkedinUrl} 


  ` } else {
    console.log("Users answers not available.")
  }
;
}

// logic for usage section: separate by lines 
// ${answers.usage}  

// add license logic - use REST API
async const renderLicenseSection = (license) => {
  if (license == "MIT") {
    const mitLicesne = await fetch("mit.txt");
    // convert to text
    const mitText = await mitLicesne.text()
    return mitText
  } else if (license == "GNU") {
    const gnuLicesne = await fetch("gnu.txt");
    // convert to text
    const gnuText = await gnuLicesne.text()
    return gnuText
  } else if (license == "apache") {
    const apacheLicesne = await fetch("apache.txt");
    // convert to text
    const apacheText = await apacheLicesne.text()
    return apacheText
  }
   return `This project is licensed under ${license}`
}


// ! todo: create markdown template - to be used later in template literal
// ! todo: * When a user enters the project title then it is displayed as the title of the README

// ! todo: When a user enters a description, installation instructions, usage information, contribution guidelines,
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