// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    install,
    usage,
    license,
    contribution,
    tests,
    githubUsername,
    emailAddress,
  } = data;

  // Function to generate the license badge based on the chosen license
  function generateLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
      license
    )}-blue.svg)`;
  }

  // Function to generate the GitHub profile link
  function generateGitHubLink(username) {
    return `[GitHub Profile](https://github.com/${username})`;
  }

  const tableOfContents = `
  ## *Table of Contents*
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  `;

  return `
  # *${title}*

  ${generateLicenseBadge(license)}

  ## *Description*
  ${description}

  ${tableOfContents}
  
  ## *Installation* <a name="installation"></a>
  ${install}

  
  ## *Usage* <a name="usage"></a>
  ${usage}

  
  ## *License* <a name="license"></a>
  This project is licensed under the ${license} license.  
  ${generateLicenseBadge(license)}

   ${
     license === "MIT"
       ? "This means that this project is open source and can be used by anyone, even for commercial purposes."
       : ""
   }
  
  ## *Contributing* <a name="contributing"></a>
  ${contribution}

  
  ## *Tests* <a name="tests"></a>
  ${tests}

  
  ## *Questions* <a name="questions"></a>
  For any questions, please contact me:
- GitHub: ${generateGitHubLink(githubUsername)}
- Email: ${emailAddress} (Feel free to reach out with any additional questions)
`;
}

module.exports = generateMarkdown;
