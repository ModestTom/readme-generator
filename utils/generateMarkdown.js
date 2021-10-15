// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/License-${license}-informational`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  switch(license) {
    case 'GPL':
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0.html`;
    break;
    case 'MIT':
    licenseLink = `https://mit-license.org/`;
    break;
    case 'BSD':
    licenseLink = `https://opensource.org/licenses/BSD-2-Clause`;
    break;
    case 'Apache':
    licenseLink = `http://www.apache.org/licenses/LICENSE-2.0.html`;
    break;
  }
  return`[${license}](${licenseLink})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![](${renderLicenseBadge(license)})  
  This application is issued by ${renderLicenseLink(license)} licensing.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents ##
  * [Licensing](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Testing](#testing)
  * [Contribution](#contribution)
  * [Contact](#contact)

  ## License ##
  ${renderLicenseSection(data.license)}

  ## Description ##
  ${data.description}

  ## Installation ##
  ${data.install}

  ## Usage ##
  ${data.usage}

  ## Testing ##
  ${data.testing}

  ## Contact ##
  * Email: ${data.email}
  * GitHub: [${data.github}](${data.github})
`;
}

module.exports = generateMarkdown;
