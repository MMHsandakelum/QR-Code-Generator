import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            message: "Please Enter Your URL",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        console.log('URL is ', url);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });