const questions = [
    {
        type: "list",
        name: "type",
        message: "Which type of employee are you? ",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "What is your name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? "
    }
];

const engineerQ = {
    type: "input",
    name: "github",
    message: "What is your GitHub username? "
};

const managerQ = {
    type: "input",
    name: "officeNum",
    message: "What is your office number? "
};

const internQ = {
    type: "input",
    name: "school",
    message: "What school do you attend? "
};

const addAnotherQ = {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another employee? "
};

module.exports = {questions, engineerQ, internQ, managerQ, addAnotherQ};