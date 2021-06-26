const fs = require("fs")
const inquirer = require("inquirer")
const generatehtml = require("./src/generatehtml")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var employees = []

const managerquestions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is your office number?',
    },
]
const engineerquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
]

const internquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of your school?',
    },

]
function init() {
    inquirer.prompt(managerquestions).then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber)
        employees.push(manager)
        menu()
    })
}
init()

function menu() {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "What would you like to choice?",
        choices: ["add an engineer", "add an intern", "build a team"]
    }]).then((answers) => {
        if (answers.menu === "add an engineer") {
            addengineer()
        }
        else if (answers.menu === "add an intern") {
            addintern()
        }
        else {
            createhtml()
        }
    })
}
function addengineer() {
    inquirer.prompt(engineerquestions).then((answers) => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(engineer)
        menu()
    })
 }
function addintern() {
    inquirer.prompt(internquestions).then((answers) => {
        let intern= new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(intern)
        menu()
    })
 }
function createhtml() { 
    console.log(employees)
    fs.writeFile("./dist/employee.html", generatehtml(employees), (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
);}
