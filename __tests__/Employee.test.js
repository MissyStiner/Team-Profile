const Employee = require("../lib/Employee");

test ('creates a new employee', () => {
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
})