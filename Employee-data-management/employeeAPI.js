const employeeArray = require('./employeeArray');

class Employers{

    // Constructor - array of employers
    constructor(){
        this.employers = employeeArray.getAllEmployees();
    }

    // Add an employer
    addEmployer(newEmployee){
        this.employers.push(newEmployee);
        return this.getEmployerById(id);
    }

    // Get an employer
    getEmployerById(id){
        return this.employers.find(employer => employer.id === parseInt(id));
    }

    // Get all employers
    getAllEmployers(){
        return this.employers;
    }

    // Update an employer
    updateEmployer(updateEmployee){
        let index = updateEmployee.id - 1;
        this.employers[index] = updateEmployee;
        return this.getEmployerById(index);
    }

    // Delete an employer
    // void return
    deleteEmployer(id){
        let index = this.employers.findIndex(employer => employer.id === id);
        this.employers[index] = null;
    }
}

// Exporting the module
module.exports = new Employers();
