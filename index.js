const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

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

promptUser();
// const generateHTML = (answers) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// // Bonus using async/await and try/catch
// const init = async () => {
//     console.log('hi');
//     try {
//         const answers = await promptUser();

//         const html = generateHTML(answers);

//         await writeFileAsync('index.html', html);

//         console.log('Successfully wrote to index.html');
//     } catch (err) {
//         console.log(err);
//     }
// };

// init();



// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();