// function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.title}

  Table of Contents
  * [Description](#description)
  * [Github Repository](#githubRepo)
  * [Github Deployed Site](#homepage)
  * [Author](#author)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test Instructions](#testInstructions)
  * [Contributors](#contributors)
  * [License](#licenses)
  * [Questions](#questions)
  
  ### Description
  ${data.description}

  ### Github Repository
  ${data.githubRepo}

  ### Github Site
  ${data.homepage}

  ### Author
  ${data.author}

  ### Installation

  ${data.installation}

  ### Usage

  ${data.usage}

  ### Test Instructions

  ${data.testInstructions}

  ### Contributors

  ${data.contributors}

  ### License

  ![badge](https://img.shields.io/badge/${encodeURI(data.license)}-License-<color>)

  ### Questions

  For additional questions, reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
