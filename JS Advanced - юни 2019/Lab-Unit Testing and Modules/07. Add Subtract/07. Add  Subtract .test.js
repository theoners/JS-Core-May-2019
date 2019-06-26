let expect = require("chai").expect;
let createCalculator = require("./07. Add  Subtract");

describe("Tests Add Subtract", () => {
    let calculator;
    beforeEach(() => {
        calculator = createCalculator();
    });
    it('return value 0 before any calculation ', () => {
        let expected = 0;
        let actual = calculator.get();
        expect(actual).to.be.equal(expected);

    });
    describe("Add function",()=>{

        it('return true value ', () => {
            let expected = 1;
            calculator.add(1);
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });
        it('return true value ', () => {
            let expected = 2;
            calculator.add(1);
            calculator.add(1);
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });
        it('parsing', () => {
            let expected = 2;
            calculator.add("1");
            calculator.add("1");
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });

        it('return NaN', () => {

            calculator.add("a");
            let actual = calculator.get();
            expect(actual).to.be.NaN;

        });
    });
    describe("Subtract function",()=>{
        it('return true value ', () => {
            let expected = -1;
            calculator.subtract(1);
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });
        it('return true value ', () => {
            let expected = -3;
            calculator.subtract(1);
            calculator.subtract(1);
            calculator.subtract(1);
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });
        it('return NaN', () => {

            calculator.subtract("a");
            let actual = calculator.get();
            expect(actual).to.be.NaN;

        });
        it('parsing', () => {
            let expected = -2;
            calculator.subtract("1");
            calculator.subtract("1");
            let actual = calculator.get();
            expect(actual).to.be.equal(expected);

        });
    })
});