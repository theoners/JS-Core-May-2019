let expect = require("chai").expect;
let sum = require("./04. Sum of Numbers");


describe("Sum of Numbers.Tests", () => {
    it("expect correct sum", () => {
        let expected = 6;
        let actual = sum([1, 2, 3]);

        expect(actual).to.equal(expected);
    });

    it("Expect 0 with empty array", () => {
        let expected = 0;
        let actual = sum([]);

       expect(actual).to.equal(expected);
    });

    it("Expect NaN when input contains string",  ()=> {
        const inputArray = [0, 'foo', 1];


        const actual = sum(inputArray);

        expect(actual).to.be.NaN;
    });
});