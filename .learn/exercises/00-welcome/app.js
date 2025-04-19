
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


const fromDOllarToYen = function(valueInDollar){
// Convert the given valueInDollar to Yen
let valueInYen = valueInDOllar * 156.5
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPounds = valueInEuro * 0.87;
    // return the Pound value
    return valueInPounds;
}

// Euro to Yen
const fromDOllarToYen = function(valueInEuro){
// Convert the given valueInEuro to Yen
let valueInYen = valueInEuro * 156.5
}

// Euro to Yen
const fromDOllarToYen = function(valueInEuro){
// Convert the given valueInEuro to Yen
let valueInYen = valueInEuro * 156.5
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDOllar };

