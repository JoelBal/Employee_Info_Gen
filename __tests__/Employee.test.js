const Employee = require("../lib/Employee");

test('getName using getName method', () => {
    let employee = new Employee("Joel", 11, "joelbalkcom@gmail.com")
    expect(employee.getName()).toBe("Joel");
  });