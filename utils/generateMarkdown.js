import fs from "fs"; 

// function to generate markdown for README
export default function generateMarkdown(answers) {
  if (answers) {
  // console.log(answers.name)
  return `# ${answers.name} ${renderLicenseBadge(answers.license)}


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

- [Email](${answers.email})
- [GitHub](${answers.githubUrl})
- [LinkedIn](${answers.linkedinUrl})


` } else {
    console.log("User answers not available.")
  }
;
}

// function to render  license section
const renderLicenseSection =  (license) => {
  try {
    if (license === "MIT License (MIT)") {
      const mitLicense = fs.readFileSync("../../assets/licenses/mit.txt",  'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return "error"
        } 
        return data
      })
      return mitLicense;
    } else if (license == "GNU General Public License v3.0 (GPL-3.0)") {
      const gnuLicense = fs.readFileSync("../../assets/licenses/gnu.txt", 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return "error"
        } 
        return data
      })
      return gnuLicense;
    } else if (license == "Apache License 2.0 (Apache-2.0)") {
      const apacheLicense = fs.readFileSync("../../assets/licenses/apache.txt", 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return "error"
        } 
        return data
      })
      return apacheLicense;
    } 
  } catch(err){
    console.error(err);
  };
}

// function to render license badges
const renderLicenseBadge = (license) => {
  const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  if (license === "MIT License (MIT)") {
    return mitBadge;
  } else if (license == "GNU General Public License v3.0 (GPL-3.0)") {
    return gnuBadge;
  } else if (license == "Apache License 2.0 (Apache-2.0)") {
  return apacheBadge;
  }
}
