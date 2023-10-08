// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
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



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Motivation
  ${data.motivation}
  ## 
  ${data.table}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credit}
  ## Licenses
  ${renderLicenseBadge(data.license)}
  ## Testing
  ${data.test}
  `;
}

module.exports = generateMarkdown;
