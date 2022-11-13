
//include the parser
var {parse} = require("../interpreter/parser.js");
var expect = require("chai").expect;


//write unit tests for the parser
describe("Parser", function(){
    describe("parse", function(){
      
        it("should return an object with steps, output, input, next and errors properties", function(){
            var instruction = "(add 1 2)";
            var previousObj = {
                steps: [],
                output: null,
                input : null,
                next: null,
                errors: []
            }
            var result = parse(instruction,previousObj);
            expect(result).to.have.property("steps");
            expect(result).to.have.property("output");
            expect(result).to.have.property("input");
            expect(result).to.have.property("next");
            expect(result).to.have.property("errors");
        });
        it("should return an object with output field that includes value,type and list properties", function(){
            var instruction = "(add 1 2)";
            var previousObj = {
                steps: [],
                output: null,
                input : null,
                next: null,
                errors: []
            }
            var result = parse(instruction,previousObj);
            expect(result.output).to.have.property("value");
            expect(result.output).to.have.property("type");
            expect(result.output).to.have.property("list");
        
        });
        it("should return a non empty errors array", function(){
            var instruction = "(add 1 (subtract 2 and 3))";
            var previousObj = {
                steps: [],
                output: null,
                input : null,
                next: null,
                errors: []
            }
            var result = parse(instruction,previousObj);
            expect(result.errors).to.not.be.empty;
            console.log(result.errors);
        });
       
    });
});

