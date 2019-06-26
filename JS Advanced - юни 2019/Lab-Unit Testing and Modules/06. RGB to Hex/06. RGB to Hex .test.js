let expect = require("chai").expect;
let rgbToHexColor = require("./06. RGB to Hex");

describe("Tests rgbToHex", () => {
    it("return true result", () => {
        let expected = "#000000";
        let actual = rgbToHexColor(0, 0, 0);
        expect(actual).to.be.equal(expected);
    });
    it("return true result", () => {
        let expected = "#6F6F6F";
        let actual = rgbToHexColor(111, 111, 111);
        expect(actual).to.be.equal(expected);
    });
    it("return true result", () => {
        let expected = "#FFFFFF";
        let actual = rgbToHexColor(255, 255, 255);
        expect(actual).to.be.equal(expected);
    });
    it("return  undefined when red color is not in range", () => {
        let actual = rgbToHexColor(300, 0, 0);
        expect(actual).to.be.undefined;
    });
    it("return undefined when green color is not in range", () => {
        let actual = rgbToHexColor(8, 444, 0);
        expect(actual).to.be.undefined;
    });
    it("return correct undefined when blue color is not in range", () => {
        let actual = rgbToHexColor(8, 0, 555);
        expect(actual).to.be.undefined;
    });
    it("return  undefined whit negative numbers", () => {
        let actual= rgbToHexColor(-8, -1, -555);
        expect(actual).to.be.undefined;
    });
    it("return undefined whit input double", () => {
        let actual = rgbToHexColor(8.6, -1, -555);
        expect(actual).to.be.undefined;
    });
});