// TODO: Write code to define and export the Employee class

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        // this returns the constructors name every time - so it will not have to be overridden depending on type of employee
        return this.constructor.name;
    };
};

module.exports = Employee;