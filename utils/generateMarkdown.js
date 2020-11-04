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

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  © 2020 ${data.author}.  All Rights Reserved.


  ### Questions

  For additional questions, reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
