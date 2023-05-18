const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here

class employee {
  constructor(names, position, yearjoined, salary) {
    this.names = names;
    this.position = position;
    this.yearjoined = yearjoined;
    this.salary = salary;
  }

  idbadge = () => {
    return this.names, this.position;
  };
}

const employee1 = new employee("Abdullah", "student", 2023, 10000);
employee1;

console.log(employee1.idbadge());

// // class manager extends employee{

// //     constructor ( name, position, yearjoined,salary, bounspercentage) {

// //     super ( name, position, yearjoined,salary,)

// //     };

// }
