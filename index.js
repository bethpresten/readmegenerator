const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const markDown = "demo/README-demo.md";

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
            type: 'list',
            name: 'license',
            message: 'What is the license name?',
            choices: ["MIT", "Mozilla Public License", "GPL", "Apache License"]
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])

        .then(function (data) {
            // const markDown = "demo/README-demo.md";
            console.log(data);
            writeMarkdown(markDown, data)
        });
};

function writeMarkdown(markDown, data) {
    // const markDown = "demo/README-demo.md";
    fs.writeFile(markDown, generateMarkdown(data), null, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote README!")
    });
};

promptUser();


    // .then(function (data) {
    //     const readMeFile = "/demo/README-demo.md";
    //     console.log(data);
    //     writeReadMe(readMeFile, data);
    // })
// };

// function writeReadMe(readMeFile, data) {
//     fs.writeFile(writeReadMe, generateMarkdown(data), null, function (err) {
//         if (err) {
//             return console.log(err);
//         } console.log("Wrote new ReadMe!")
//     });
// }
// const init = async () => {
//     try {
//         const answers = await promptUser();

//         const mdFile = generateMarkdown(answers);

//         await writeFileAsync('./demo/README-demo.md', mdFile);

//         console.log('Successfully wrote to ReadMe');
//     } catch (err) {
//         console.log(err);
//     }
// };

// promptUser()
// const init = async () => {
//     const answers = await promptUser()
//     const mdFile = generateMarkdown(answers)
//         .then(() => writeFileAsync('./demo/README-demo.md', mdFile))
//         .then((answers) => console.log(answers))
//         .catch((err) => console.log(err));
//     init();
// };

// init();
//


