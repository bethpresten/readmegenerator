const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'githubRepo',
            message: 'What is the name of your GitHub repository?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a general description of your project',
        },
        {
            type: 'input',
            name: 'homepage',
            message: 'What is your project homepage?',
        },
        {
            type: 'input',
            name: 'author',
            message: 'Who is the author of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the steps for installation',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the steps for usage',
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Input any badges.',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Are there specific test instructions (if no, press enter)?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the contributors on this project?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the license name?',
        }
    ]);
};

// promptUser()
//     .then((answers) => writeFileAsync('demo/README-demo.md', generateMarkdown(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));


// writeFileAsync();

// // function to write README file
// function writeToFile('readme.md', data, err) {
//     const readme = generateMarkdown(answers);
//     await writeFileAsync()
// };


// // Bonus using async/await and try/catch
const init = async () => {
    console.log('test');
    try {
        const answers = await promptUser();

        const mdFile = generateMarkdown(answers);

        await writeFileAsync('./demo/README-demo', mdFile);

        console.log('Successfully wrote to ReadMe');
    } catch (err) {
        console.log(err);
    }
};

init();






// // function to initialize program
// function init() {

// }

