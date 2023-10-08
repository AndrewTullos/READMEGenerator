// // TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license == "MIT") {
      return `![Github License](https://img.shields.io/badge/license-MIT-red.svg)`;
    } else if (license == "Apache-2.0") {
      return `![Github License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license == "BSD-2-Clause") {
      return `![Github License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
    } else if (license == "BSD-3-Clause") {
      return `![Github License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    } else if (license == "none") {
      return '';
    } else {
      return '';
    }
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ${renderLicenseBadge(data.license)}
  
  ## Motivation
  ${data.motivation}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#licenses)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credit}
  
  ## Licenses
  This license is covered under the ${data.license}.
  
  ## Testing
  ${data.test}
  
  ## Questions 
  ### Ask me anything:
  If you hae any questions in regards to this application please follow my Github or reach out via my email address.
  
  ${data.email}

  [Github: ${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
