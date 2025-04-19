// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDOllar };

