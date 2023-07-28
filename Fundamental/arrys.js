let myArray=[1,2,'applet',8.9];
console.log(myArray[0]);
// Array are immutable we can add the new element to the array
myArray[1]='good luck with'
console.log(myArray[1]);
console.log(myArray.length);
// push method adds the new element to the end of the array
myArray.push('Hello, world!');
console.log(myArray);
console.log(myArray.length);
// Pop method removes the element from the end of the array the array\

let newArray = myArray.pop();
console.log(newArray);
console.log(myArray);