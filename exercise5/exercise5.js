/*
Exercise 5
• For understanding more about arrays, try creating an array that
has 5 elements.
• Replace the value of the element at position 1 and 4.
• Add a new element to the beginning of the array
• Remove the element at the end of the array
• Print the array to the console.

*/


let myArray = [1, 2, 3, 4, 5];


myArray[1] = 'elemento_reemplazado_1';
myArray[4] = 'elemento_reemplazado_4';


myArray.unshift('nuevo_elemento_al_principio');

// Eliminar el último elemento del array
myArray.pop();


console.log(myArray);
