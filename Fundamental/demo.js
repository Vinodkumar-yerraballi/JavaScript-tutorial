// type of conversion function 
let number=6
console.log(number);
// Covert the data into one format to another format
// how to convert number to string format using string conversion function
let num = String(6)
console.log(num, typeof num)
// How to convert string to number format using Number conversion function
let num1 = Number("123")
console.log(num1, typeof num1)
// Coercion function
// when adding a number to sting the output will be formatted
x=6 + ""
console.log(x,typeof x)
// When a substring is number we get the number as
x=8-2
console.log(x,typeof x)

y= 6
x=!y
console.log(x,typeof x)
console.log(Boolean(7))
// Type converter function
// In the case of function only numbers are allowed to sting doesnot allowed
let num2=parseInt("123 Vinodkumar")
console.log(num2, typeof num2)