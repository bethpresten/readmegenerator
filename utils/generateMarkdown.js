// function to generate markdown for README

// writing the readme using template literals and pulling in the data from the index.js
function generateMarkdown(data) {
  return `### ${data.title}
  ![badge](https://img.shields.io/badge/${encodeURI(data.license)}-License-<color>)

  Table of Contents
  * [Description](#description)
  * [Github Repository](#githubRepo)
  * [Github Deployed Site](#homepage)
  * [Author](#author)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test Instructions](#testInstructions)
  * [Contributors](#contributors)
  * [License](#license)
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
  ${data.license}


  ### Questions

  For additional questions, reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
