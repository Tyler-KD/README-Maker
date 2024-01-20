// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `\n* (https://choosealicense.com/licenses/mit/)\n`;
  }
  if (license === "Apache2.0") {
    return `\n* (https://choosealicense.com/licenses/apache-2.0/)\n`;
  }
  if (license === "GNUGeneralPublicLicensev3.0") {
    return `\n* (https://choosealicense.com/licenses/gpl-3.0/)\n`;
  }
  if (license === "BSD2") {
    return `\n* (https://choosealicense.com/licenses/bsd-2-clause/)\n`;
  }
  if (license === "BSD3") {
    return `\n* (https://choosealicense.com/licenses/bsd-3-clause-clear/)\n`;
  }
  if (license === "BoostSoftwareLicense1.0") {
    return `\n* (https://choosealicense.com/licenses/bsl-1.0/)\n`;
  }
  if (license === "CreativeCommonsZerov1.0") {
    return `\n* (https://choosealicense.com/licenses/cc0-1.0/)\n`;
  }
  if (license === "EclipsePublicLicense2.0") {
    return `\n* (https://choosealicense.com/licenses/epl-2.0/)\n`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `Covered under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Tests
${data.tests}
## Questions
If you have any questions, please visit [GitHub/${data.author}](https://github.com/${data.author}) or submit questions to ${data.email}.
`;
}

// The module object has an exports property which is an empty object
// You can export functions and values from a module by using module.exports
module.exports = generateMarkdown;
