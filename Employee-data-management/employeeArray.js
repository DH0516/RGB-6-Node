let employee = 
[
    {
        id: 1,
        name: 'John Doe',
        salary: 5000,
        department: 'IT'
    },
    {
        id: 2,
        name: 'Jane Doe',
        salary: 6000,
        department: 'HR'
    },
    {
        id: 3,
        name: 'Jim Doe',
        salary: 7000,
        department: 'Finance'
    },
    {
        id: 4,
        name: 'Josh Doe',
        salary: 8000,
        department: 'Marketing'
    },
    {
        id: 5,
        name: 'Jack Doe',
        salary: 9000,
        department: 'Sales'
    }
];

exports.getAllEmployees = () => {
    return employee;
}
