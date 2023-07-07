const express = require('express');
const employeeAPI = require('./employeeAPI');

// Set up the port
const port = process.env.PORT || 3000;

// Create Express app
const app = express();
app.use(express.json());

// GET HTTP method to get a list of all employers
app.get('/api/employers/', (req, res) => {
    const allEmployers = employeeAPI.getAllEmployers();
    if (allEmployers) {return res.status(200).send(allEmployers);}
    return res.status(404).send('GET: No employees found');
});

// GET HTTP method to get a single employer by id
app.get('/api/employers/:id', (req, res) => {
    const employer = employeeAPI.getEmployerById(parseInt(req.params.id));
    if (employer) {return res.status(200).send(employer);}
    return res.status(404).send(`GET: Such employee ID does not exist, ${req.params.id} vs. ${employer}`);
});

// POST HTTP method to create a new employer
app.post('/api/employers/', (req, res) => {
    // nextId: int = last employer's id + 1
    const nextId = employeeAPI.getEmployerById(employeeAPI.getAllEmployers().length).id + 1;

    const newEmployer = {
        id: nextId,
        name: req.body.name,
        salary: parseInt(req.body.salary),
        department: req.body.department
    };
    
    try{
        return res.status(201).send("Successfully added: ", employeeAPI.addEmployer(newEmployer));
    }
    catch(err){
        return res.status(400).send(`Could not add ${newEmployer}, ${err.message}`);
    }
});

// PUT HTTP method to update an existing employer
app.put('/api/employers/:id', (req, res) => {
    const employer = employeeAPI.getEmployerById(parseInt(req.body.id));

    if (employer) {
        const updatedEmployer = {
            id: parseInt(req.body.id),
            name: req.body.name,
            salary: parseInt(req.body.salary),
            department: req.body.department
        };

        try{
            return res.status(200).send("Successfully updated: ", employeeAPI.updateEmployer(updatedEmployer));
        }
        catch(err){
            return res.status(400).send(`Could not update ${updatedEmployer}, ${err.message}`);
        }
    }

    // If employer not found
    return res.status(404).send('Update: Such employee ID does not exist');
});

// DELETE HTTP method to delete an existing employer
app.delete('/api/employers/:id', (req, res) => {
    const paramsId = parseInt(req.params.id);
    const employer = employeeAPI.getEmployerById(paramsId);
    if (employer) {
        try{
            employeeAPI.deleteEmployer(paramsId)
            return res.status(200).send(`Successfully deleted ID: ${req.params.id}`);
        }
        catch(err){
            return res.status(400).send(`Could not delete employee with ID: ${req.params.id}, ${err.message}`);
        }
    }
    return res.status(404).send('Delete: Such employee ID does not exist');
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// 404 catch-all handler
app.use((req, res, next) => {
	res.status(404).send('404 - Not Found');
});

// 500 error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('500 - Internal Server Error');
});