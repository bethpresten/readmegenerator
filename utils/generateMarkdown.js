// function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.title}

  ### Description
  ${data.description}

  ###Github Repository
  ${data.githubRepo}

  ###Github Site
  ${data.homepage}
  
  ### Author
  ${data.author}

  Table of Contents
  * [Installation] (#installation)
  * [USAGE] (#usage)
  * [License] (#licenses)
  * [Tests] (#tests)
  * [Installation] (#installation)
  * [Questions] (#questions)
 
  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Test Instructions
  ${data.testInstructions}

  ### Contributors
  ${data.contributors}

  ### License
  "https://img.shields.io/static/v1?label=<LABEL>&message=<${data.license}>&color=<blue>"

  ### Questions
  For additional questions, reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
