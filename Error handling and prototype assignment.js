// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.


function convertNumber(string) {
    try{
        return Number(string)
    }catch(error){
        return "Invalid number"
    }
   
}
console.log(convertNumber("123"));
console.log(convertNumber("abc"))





// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.



function getPerson(person) {
    try {
        if (!person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
            throw new Error("Invalid parameter type");
        }

        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

const person = {
    name: "John Doe",
    age: 30,
};

const result = getPerson(person); // "Name: John Doe, Age: 30"
const invalidResult = getPerson({ }); // "Invalid parameter type"

console.log(result);
console.log(invalidResult);






// 3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.



class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new Car("Tesla", "Model S", 2023);
console.log(myCar.getDescription()); // "This is a 2023 Tesla Model S"






// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.



class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const myEmployee = new Employee("John Doe", "Software Engineer", 100000);
console.log(myEmployee.getSalary()); // 100000






// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.


class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const myPerson = new Person();
console.log(myPerson.getDetails()); // "Name: Unknown, Age: 0"

const anotherPerson = new Person("John Doe", 30);
console.log(anotherPerson.getDetails()); // "Name: John Doe, Age: 30"







// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.



class Calculator {
    static add(x, y) {
        return x + y;
    }
}

const calculator = new Calculator();
console.log(Calculator.add(10, 20)); // 30





// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.


class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return "*".repeat(this._password.length);
    }
  
    set password(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
      } else {
        console.error("Error: Invalid password.");
      }
    }
  }

  
  // Create a new User instance
const user = new User("JohnDoe", "password123");

// Get the username
console.log(user.username); // Output: JohnDoe

// Get the password (masked with asterisks)
console.log(user.password); // Output: ***********

// Set a new password
user.password = "newPassword123";

// Get the new password (masked with asterisks)
console.log(user.password); // Output: ***********

// Try setting an invalid password
user.password = "weak"; // Output: Error: Invalid password.





// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.



// Create a prototype object called Student
function Student(name) {
    this.name = name;
  }
  
  // Add the printDetails method to the prototype
  Student.prototype.printDetails = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Instantiate a Student object with the name "Mithun"
  const student = new Student("Mithun");
  
  // Call the printDetails method
  student.printDetails(); // Output: Hello, my name is Mithun
  





//   9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.



function numberChecker(numbersArray) {
    return function(number) {
      return numbersArray.includes(number);
    };
  }

  
  // Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a number checker function for the numbers array
const checkNumber = numberChecker(numbers);

// Check if a number is in the array
console.log(checkNumber(3));  // Output: true
console.log(checkNumber(6));  // Output: false
console.log(checkNumber(1));  // Output: true






// 10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.


function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }

  
  // Sample array of products
const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Books' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Clothing' },
    { name: 'Product 5', category: 'Books' }
  ];
  
  // Create a filter function for the 'Books' category
  const filterProductsByCategory = filterByCategory(products);
  
  // Filter the products by the 'Books' category
  const filteredProducts = filterProductsByCategory('Books');
  
  // Output the filtered products
  console.log(filteredProducts);
  