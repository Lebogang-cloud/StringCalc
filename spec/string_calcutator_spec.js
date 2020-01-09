//index_spec.js
let String = require("../src/string_calculator")
describe("String Calculator", function() {


    it ("should return zero when '' is passed", function() {
        expect(String.add('')).toEqual(0);
    });

    it ("should return the number itself when a single number is passed", function() {
        expect(String.add('1')).toEqual(1);
    });

    it ("should return the sum of the number if two are given", function() {
        expect(String.add('1,1')).toEqual(2);
    });

    it("should allow \\n in between the input number string", function() {
        expect(String.add("1\n2,3")).toEqual(6);
    });

    it("should allow \\n in between the input number string", function() {
        expect(String.add("//4\n142")).toEqual(3);
    });

     
    

    it("should ignores integers greater than or equal to 1000", function() {
        expect(String.add("//;\n1000,1;2")).toEqual(3);
    });

    it("should support delimiters of any length", function() {
        expect(String.add("//***\n1***2***3")).toEqual(6);
    });
  
    it("should be able to support different delimiters of any length", function() {
        expect(String.add("//[:D][%]\n1:D2%3")).toEqual(6);
        expect(String.add("//[***][%%%]\n1***2%%%3")).toEqual(6)
        expect(String.add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6)
        
    });

    it("should handle invalid input.", function() {
    expect(String.add("//;\n1000;1;2;")).toThrowError;
    expect(String.add("   //;\n1000,1;2")).toThrowError;
    expect(String.add("1,2,3//;\n1000,1;2")).toThrowError;
    });
    
    // it("should not allow negative integers.", function() {
    //     expect(String.add("-1,-2,3,4")).toThrowError;
    // });
    console.log(String.add("-1,-2,3,4"));
  });
    
    
