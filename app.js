let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
}

console.log(fromEuroToDollar(1)); // 1.07
console.log(fromDollarToYen(1)); // 146.26168224299065
console.log(fromYenToPound(156.5)); // 0.87
