const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employees name? ",
        validate: function (value) {
            var pass = value.match(/^[A-Za-z\s\.]+$/);
            if (pass) { return true };
            return 'Please enter a valid name with no numbers or special character';
        }
    },
    {
        type: "list",
        name: "type",
        message: "What is their role the team? ",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID? ",
        validate: function(value) {
            var pass = value.match(/^[0-9]+$/);
            if (pass) { return true };
            return 'Please enter a valid employee ID number'
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address? ",
        validate: function(value) {
            var pass = value.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

            if (pass) { return true };
            return 'Please enter a valid email address';
        }
    }
];

const engineerQ = {
    type: "input",
    name: "github",
    message: "What is their GitHub username? ",
    validate: function(value) {
        if (value.trim().indexOf(" ") === -1) { return true };
        return "Please enter a valid GitHub username.";
    }
};

const managerQ = {
    type: "input",
    name: "officeNum",
    message: "What is their office number? ",
    validate: function (value) {
        var pass = value.match(/^[0-9]+$/);
        if (pass) { return true };
        return 'Please enter a valid employee ID number'
    }
};

const internQ = {
    type: "input",
    name: "school",
    message: "Which school do they attend? ",
    validate: function (value) {
        var pass = value.match(/^[A-Za-z\s]+$/);
        if (pass) { return true };
        return 'Please enter a valid school name with no numbers or special character';
    }
};

const addAnotherQ = {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another employee? "
};

module.exports = {questions, engineerQ, internQ, managerQ, addAnotherQ};