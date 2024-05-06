// Function to add two numbers
/**
 * Function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function Sum(a, b) {
    return a + b;
}

// Unit tests for the Sum function
console.log("Sum Function Tests:");
console.log("Test 1:", Sum(3, 4));  // Expected Output: 7
console.log("Test 2:", Sum(-5, 10));  // Expected Output: 5
console.log("Test 3:", Sum(0, 0));  // Expected Output: 0

// Function to subtract one number from another
/**
 * Function to subtract one number from another.
 * @param {number} a - The number to be subtracted from.
 * @param {number} b - The number to subtract.
 * @returns {number} The result of the subtraction.
 */
function Subtract(a, b) {
    return a - b;
}

// Unit tests for the Subtract function
console.log("\nSubtract Function Tests:");
console.log("Test 1:", Subtract(10, 5));  // Expected Output: 5
console.log("Test 2:", Subtract(5, -3));  // Expected Output: 8
console.log("Test 3:", Subtract(0, 0));  // Expected Output: 0

// Function to multiply two numbers
/**
 * Function to multiply two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function Multiply(a, b) {
    return a * b;
}

// Unit tests for the Multiply function
console.log("\nMultiply Function Tests:");
console.log("Test 1:", Multiply(3, 4));  // Expected Output: 12
console.log("Test 2:", Multiply(-5, 10));  // Expected Output: -50
console.log("Test 3:", Multiply(0, 5));  // Expected Output: 0

// Function to divide one number by another
/**
 * Function to divide one number by another.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number|undefined} The result of the division, or undefined if division by zero occurs.
 */
function Divide(a, b) {
    if (b === 0) {
        console.error('Error: Division by zero');
        return undefined;  
    }
    return a / b;
}

// Unit tests for the Divide function
console.log("\nDivide Function Tests:");
console.log("Test 1:", Divide(10, 2));  // Expected Output: 5
console.log("Test 2:", Divide(-10, 5));  // Expected Output: -2
console.log("Test 3:", Divide(0, 5));  // Expected Output: 0
console.log("Test 4:", Divide(10, 0));  // Expected Error Output: Error: Division by zero
