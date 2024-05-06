// Create a JSON object for a book:
let book = {
    title: "The Name of the Wind",
    description: "A lovely story.",
    author: "Patrick Rothfuss",
    numberOfPages: 662
};

// Print the properties individually:
console.log("Book Title:", book.title);
console.log("Book Description:", book.description);
console.log("Book Author:", book.author);
console.log("Number of Pages in the Book:", book.numberOfPages);

// Print the complete object:
console.log("\nComplete Book Object:");
console.log(book);

// Update the book description
book.description = "A captivating story that follows the life of Kvothe, a legendary musician and adventurer.";

// Print the updated description
console.log("\nUpdated Book Description:");
console.log(book.description);

// Print the complete updated object
console.log("\nComplete Book Object after updating the description:");
console.log(book);




