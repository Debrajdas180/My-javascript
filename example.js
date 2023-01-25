var a = 78; //variable for integer values, integer data type 
var b = "Debraj"; //variable for string, string data type 
var c = true; //variable for boolean values 
var d = null;
var e = undefined;

console.log(a); //for printing the value of a var

/* Operators in javaScript
In 3 + 4 '+' is the operator and 3,4 are operands 
1. unary operators - It has single operand (x = -x)
2. binary operators - It has two oprand (x = x+6) */ 

// oprand - entities on which operators operate
var num1 = 6;
var num2 = 5;
console.log("The value of num1 + num2 = " + (num1 + num2)); // Addition
console.log("The value of num1 - num2 = " + (num1 - num2)); // Subtraction
console.log("The value of num1 * num2 = " + num1 * num2); // Multiplication
console.log("The value of num1 / num2 = " + num1 / num2); // Division
console.log("The value of num1 ** num2 = " + num1 ** num2); // Exponential operators
console.log("The value of num1 ++ = " + num1++); // after printing the value of num1 it will be increment // Increment operator
console.log("The value of ++ num1  = " + ++num1); // after increment of the value of num1 it will be print // Increment operator
console.log("The value of num1 -- = " + num1--); // after printing the value of num1 it will be decrement // Decrement operator
console.log("The value of -- num1  = " + --num1); // after decrement of the value of num1 it will be print // Decrement operator
// example of Arithmetic operators

var name = "Debraj";
var char = "and soul";
var temp = `${name} is a nice person and he has good heart ${char}`;//for attaching the var data in the string
console.log(temp);
var len = name.length;//for know the value of the string
console.log(`The length of the name var is ${len}`);
console.log("Debraj is a good boy \n Debraj"); //escape sequence character for new line 
console.log("Debraj is a good boy \t Debraj"); //escape sequence character for horizontal tab 
console.log("Debraj is a good boy \r Debraj"); //escape sequence character for carriage return (which means start from a first of line)
console.log("Debraj is a good boy \f Debraj"); //escape sequence character for form feed (new page)
console.log("Debraj is a good boy \b Debraj"); //escape sequence character for backspace

var str = "This is a string";
console.log(str);
var position = str.indexOf("is"); // for knowing the value of index of a letter 
console.log(position) // once a variable declared then no second time decalre to as a var 
var position = str.lastIndexOf("is"); // for knowing the value of index of a last letter 
var substr1 = str.slice(1,6); // for getting the index of a sub string ** slice can take also negative values and will be print upto last before value
var substr1 = str.substring(1,7); // for getting the specified index of a sub string ** substring can take only positive value and will be print upto last number (start index and end index)
var substr1 = str.substr(1,7); // for getting the index of a sub string ** substr can take also negative values and (start index and length)
console.log(substr1);
var replaced = str.replace('string','Debraj'); // string word will be replaced by Debraj
console.log(str);
console.log(replaced);
console.log(str.toUpperCase()); // converting text into Uppercase
console.log(str.toLowerCase()); // converting text into Lowercase
var newstr = str.concat('also a string class'); // for concatinate new string       
var newstr = str + " new class "; // for concatinate new string in '+' method
var str_with_white_space = '    LG is a      good electronics company     '
console.log(str_with_white_space);
console.log(str_with_white_space.trim()); // trim function will be removed first and last white spaces in a string 
var char2 = str.charAt(2); // for extracting the charecter of str variable and index number 2 
var char2 = str.charCodeAt(2); // for extracting the UTF16 code of the text
console.log(char2);
console.log(str[2]); // for extracting the index value of str 

let a = 65; //let is a block element , it will be never use to the same variable 
let a = 46; // this time it can't be used for let . a can only use at the time of inside of a function 

const b = 56; // const means constatnt . use for making a particular value a constant in whole programme 

//exapmle of if and else condition
age = 5 ;
if (age>18){
    console.log("you can drink");
}
else if (age==2){
    console.log("age is 2");
}
else if (age==5){
    console.log("age is 5");
}
else{
    console.log("you can't drink");
}

//example of switch case 
cup = 45;
switch (cup) {
    case 45:
        console.log("the is value is not correct");
        break;

    default:console.log("the value is correct");
        break;
}

// basic to declare a object 
let employee = {
    Name : "debraj" ,
    age : 22,
    height : 180,
    weight : 64,
}

// example of how to access element of a object 
console.log(employee.Name);
console.log(employee['age']);

// basic structure of a array
let names = [1,2,3,"debraj",undefined]; // creating of a array
let Names = new array (1,2,3,"debraj",undefined); // creating array in a new style
let Name = new array (23); // creating a array with having of 23 blank spaces
console.log(names.length); // for knowing length of the name array 
console.log(names.sort); // for sorting the items inside of the array element
names.push ("this is pushed"); // for adding item in the array at the end

// example of creating a function 
function greet (name, greetext="greetings from javascript"){
    let name = "name"; // this is a local variable for that it will never effect on the out side of the function 
    console.log(greetext + " " + name);
    console.log(name + " is a good boy ");
} // default value of greetext is greeting from javascript 
let greetext = "Good Morning";
let name = "debraj" ;
let name1 = "sujit" ;
let name2 = "raju" ;
let name3 = "arpan" ;

greet(name,greetext);
greet(name1,greetext);
greet(name2,greetext);
greet(name3);

// example of function which return something
function sum(a,b,c) {
    let d = a + b + c ;
    return d ;
    // after return called any line will not be executed
    // console.log("Function is returned")
}
 sum(1,2,3);

// example of alert function  
alert("DO YOU WANT TO LEAVE ME ??") // alert function take argument as a string only , also does not return anything

//example of prompt 
let name = prompt("What is your name ?" , "Guest");
console.log(name);

// example of confirm 
let deletepost = confirm ("DO YOU WNAT TO DELETE THS POST ?"); // it returns boolean values
console.log(deletepost);
   
if(deletepost){
    console.log("Your post has been deleted");
}
else{
    console.log("Your post has not been deleted");
}

// example of for loop 
i = 0 ;
for (i=0; i<3; i++){
    console.log(i);
}

// example fo for loop in array style for printing the elements of the array
let friends = ["debraj","ram","arpan","raju","sujit"];
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index]);
}

// for printing the upper array in the modern javascript style using forEach function 
friends.forEach(function f(element){
    console.log(element);
});
// for printing the upper array in the modern javascript style using for of function 
for (element of friends){
    console.log("Hello friends" + element + "this is modern java Script");
}
// example of iterate over object in for loop method at javascript
let char = { 
    Name: "debraj",
    age: 22,
    weight: 64,
}

for (key in char){
    console.log(`the ${key} of the employee is ${employee[key]}`);
}
// example of while loop in 
i = 0;
while(i<45){
 console.log(`i is less than 45`);   
}
// example of do while loop 
i = 9;
do {
  document.write("<h2> My name is Debraj</h2>");
  i++;
} while (i < 11);
