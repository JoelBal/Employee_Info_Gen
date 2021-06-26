const Engineer = require("../lib/Engineer");

test('getName using getName method', () => {
    let engineer = new Engineer("Joel", 11, "joelbalkcom@gmail.com")
    expect(engineer.getName()).toBe("Joel");
  });