var a = 78; //variable for integer values
var b = "Debraj"; //variable for stringvr
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
console.log("Debraj is a good boy \r Debraj"); //escape sequence character for carriage return 
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