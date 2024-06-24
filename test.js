const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

describe('Currency Conversion Functions', () => {
    test('converts 1 Euro to 1.07 US Dollars', () => {
        expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
    });

    test('converts 1 US Dollar to approximately 146.26 Japanese Yen', () => {
        expect(fromDollarToYen(1)).toBeCloseTo(146.26168224299065);
    });

    test('converts 156.5 Japanese Yen to 0.87 British Pounds', () => {
        expect(fromYenToPound(156.5)).toBeCloseTo(0.87);
    });
});
