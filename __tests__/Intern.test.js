const Intern = require("../lib/Intern");

test('getName using getName method', () => {
    let intern = new Intern("Joel", 11, "joelbalkcom@gmail.com")
    expect(intern.getName()).toBe("Joel");
  });