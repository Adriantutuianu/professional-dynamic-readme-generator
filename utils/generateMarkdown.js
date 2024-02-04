// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    content,
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

  return `
  # *${title}*

  ${generateLicenseBadge(license)}

  ## *Description*
  ${description}

  
  ## *Table of Contents*
  ${content}

  
  ## *Installation*
  ${install}

  
  ## *Usage*
  ${usage}

  
  ## *License*
  This project is licensed under the ${license} license.  
  ${generateLicenseBadge(license)}

   ${
     license === "MIT"
       ? "This means that this project is open source and can be used by anyone, even for commercial purposes."
       : ""
   }
  
  ## *Contributing*
  ${contribution}

  
  ## *Tests*
  ${tests}

  
  ## *Questions*
  For any questions, please contact me:
- GitHub: ${generateGitHubLink(githubUsername)}
- Email: ${emailAddress} (Feel free to reach out with any additional questions)
`;
}

module.exports = generateMarkdown;
