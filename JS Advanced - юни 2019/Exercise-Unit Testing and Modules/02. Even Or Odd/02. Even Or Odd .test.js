let expect = require("chai").expect;
let isOddOrEven = require("./02. Even Or Odd");

describe("Even Or Odd Tests", () => {
    it("return odd", () => {
        let expected = "odd";
        let actual = isOddOrEven("abc");
        expect(actual).to.be.equal(expected);
    });
    it("return odd", () => {
        let expected = "even";
        let actual = isOddOrEven("");
        expect(actual).to.be.equal(expected);
    });
    it("return even", () => {
        let expected = "even";
        let actual = isOddOrEven("abcd");
        expect(actual).to.be.equal(expected);
    });
    it("return undefined", () => {
        let expected = "even";
        let actual = isOddOrEven(1);
        expect(actual).to.be.undefined;
    });
    it("return undefined", () => {
        let expected = "even";
        let actual = isOddOrEven([]);
        expect(actual).to.be.undefined;
    });
});