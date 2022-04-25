const inquirer = require("inquirer");
const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const generateHtml = require("./util/generateHtml");

const employee = []


getManagerInfo()

function getManagerInfo() {
 inquirer.prompt ([
     {
         type: 'input', 
         name: 'name',
         message: 'What is the Manger name?',
     },
     {
        type: 'input', 
        name: 'id',
        message: 'What is the Manager id?',
    },
     {
        type: 'input',
        name: 'email',
        message: 'What is the Manager email?'
     },
     {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Manager Office Number?'
     },
 ])
 .then(function(managerAns) {
     const newManager = new Manager(managerAns.name, managerAns.id, managerAns.email, managerAns.officeNumber)
     employee.push(newManager)
     menu()
 })
}

function menu() {
    inquirer.prompt ([
        {
            type: 'list', 
            name: 'userChoice',
            message: 'what would you like to do',
            choices: ["Add Engineer", "Add Intern", "Finish"]
        },

    ]) .then(ans =>{
        switch (ans.userChoice) {
            case "Add Engineer":
                addEngineer();
                break;

            case "Add Intern":
                addIntern();
                break;
            
            case "Finish":
                generateHtml(employee);
                break;

            default:
                break;
        }
    })
    
    
    // .then(function(responseChoice) {
    //     console.log(responseChoice)
    //     if (responseChoice === "Add Engineer") {
    //         console.log("Adding Engineer!");
    //         addEngineer();
    //     };
    //     if (responseChoice === "Add Intern") {
    //         console.log("Adding Intern");
    //         addIntern();
    //     };
    //     if (responseChoice === "Finish") {
    //         console.log("generating team page!");
    //         generateHtml(employee);
    //     };
    // })
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the Engineers name?',
        },
        {
           type: 'input', 
           name: 'id',
           message: 'What is the Engineers id?',
       },
        {
           type: 'input',
           name: 'email',
           message: 'What is the Engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github?'
         },
    ]).then(function(engineerAns) {
        const newEngineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.github)
        employee.push(newEngineer)
        menu()
    })

}

function addIntern() {
    inquirer.prompt ([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the Interns name?',
        },
        {
           type: 'input', 
           name: 'id',
           message: 'What is the Interns id?',
       },
        {
           type: 'input',
           name: 'email',
           message: 'What is the Interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns school?'
         },
    ]).then(function(internAns) {
        const newIntern = new Intern(internAns.name, internAns.id, internAns.email, internAns.school)
        employee.push(newIntern)
        menu()
    })

}