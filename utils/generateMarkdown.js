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
  return `
  # *${title}*

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
