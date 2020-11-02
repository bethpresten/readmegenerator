// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Github Repository: ${data.githubRepo}
  #Github Site:   ${data.homepage}

  #Description
  ${data.description}
  
  #Author
  ${data.author}

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Badges
  ${data.badges}

  #Test Instructions
  ${data.testInstructions}

  #Contributors
  ${data.contributors}

  #License
  ${data.license}
`;
}

module.exports = generateMarkdown;
