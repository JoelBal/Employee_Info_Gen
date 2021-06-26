const Manager = require("../lib/Manager");

test('getName using getName method', () => {
    let manager = new Manager("Joel", 11, "joelbalkcom@gmail.com")
    expect(manager.getName()).toBe("Joel");
  });