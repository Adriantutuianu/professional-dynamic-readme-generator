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
    questions,
  } = data;

  // Function to generate the license badge based on the chosen license
  function generateLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
      license
    )}-blue.svg)`;
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
- Email: ${questions}
`;
}

module.exports = generateMarkdown;
