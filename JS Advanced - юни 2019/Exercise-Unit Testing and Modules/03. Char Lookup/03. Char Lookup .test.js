let expect = require("chai").expect;
let lookupChar = require("./03. Char Lookup");

describe("Char LookUp Tests", () => {
    it("return correct result", () => {
        let expected = "a";
        let actual = lookupChar("javaScript", 1);
        expect(actual).to.be.equal(expected);
    });
    it("invalid input", () => {
        let actual = lookupChar(5, 1);
        expect(actual).to.be.undefined;
    });
    it("index is double", () => {

        let actual = lookupChar("JavaScript", 3.1);
        expect(actual).to.be.undefined;
    });
    it("index is not a number", () => {
        let actual = lookupChar(5, "a");
        expect(actual).to.be.undefined;
    });
    it("index out of range", () => {
        let expected ="Incorrect index";
        let actual = lookupChar("JavaScript", -1);
        expect(actual).to.be.equal(expected);
    });
    it("index out of range", () => {
        let expected ="Incorrect index";
        let actual = lookupChar("JavaScript", 31);
        expect(actual).to.be.equal(expected);
    });

});