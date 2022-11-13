const { handleConditionalOperations } = require("./conditionalRules")
const { handleIoOperations } = require("./ioRules")
const { handleNumericOperations } = require("./numericRules")
const { handleStringOperations } = require("./stringRules")
const { getValue } = require("./util")



const numericOperations=['add','subtract','multiply','divide','round','precision']
const stringOperations=['concat','length','lowercase','uppercase','trim','substring','replace','split','join']
const conditionalOperations=['if','elif','else','then','all','any']
const ioOperations = ["print"]


/**
 * 
 * @param {string} instruction 
 * @param {object} previousObj 
 * @returns {object}
 * @description
 * This function is used to parse the instruction and return the output
 * It also returns the next instruction to be executed if goto is used
 * It also returns the steps taken to reach the output
 * It also returns the errors if any
 * Output is an object with value, type and list properties
 * Steps is an array of values
 * Next is the next instruction to be executed
 * Errors is an array of errors
 * @example
 * let instruction = "add 1 2";
 * let previousObj = {
 * steps: [],
 * output: null,
 * input : null,
 * next: null,
 * errors: []
 * }
 * let result = parse(instruction,previousObj);
 * console.log(result);
 * result = {
 * steps: [3],
 * output: {
 * value: 3,
 * type: 'number',
 * list: null
 * },
 * input : null,
 * next: null,
 * errors: []
 * }
 */

const parse = (instruction, previousObj)=>{

    if(previousObj == null){
        previousObj = {
            steps: [],
            output: null,
            input : null,
            next: null,
            errors: []
        }
    }

    try{

    previousObj.output = {
        value: null,
        type: null,
        list: null
    }
    previousObj.next = null;
    previousObj.errors = [];

   let str = instruction;

   let stack = [];
   let expression = "";
   let evalResult = null;

   for(let i=0;i<str.length;i++){
       if(str[i] != ')'){
           stack.push(str[i]);
       }
       else if(str[i] == ')'){
           if(stack.length == 0){
                previousObj.errors.push("Error: Evaluating expression at index "+i);
               return previousObj;
           }
           while(stack.length != 0 && stack[stack.length-1] != '('){
           expression =  stack.pop()+expression;
           }
           if(stack[stack.length-1] == '('){
               stack.pop();
              evalResult =  evaluateExpression(expression,previousObj);
                if(evalResult == null){
                    previousObj.errors.push("Error: Evaluating expression ["+ expression +"]");
                    return previousObj;
                }
                stack.push(evalResult.output.value);
                expression = "";
           }
       }
   }
   if(evalResult == null){
         previousObj.errors.push("Error: Evaluating expression ["+ expression +"]");
            return previousObj;
    }
    previousObj = evalResult;
    if(previousObj.output.type == "number" || previousObj.output.type == "string" || previousObj.output.type == "boolean" || previousObj.output.type == "label"){
    previousObj.steps.push(evalResult.output.value);
    }
    return previousObj;
    }catch(e){
        previousObj.errors.push("Error: Evaluating expression ["+ instruction +"]");
        return previousObj;
    }
}


const evaluateExpression = (str,obj)=>{


    let expr = str.split(' ');
try{
    if( numericOperations.includes(expr[0])){
      return  handleNumericOperations(expr,obj);
    }
    else if(stringOperations.includes(expr[0])){
     return  handleStringOperations(expr,obj);
    }
    else if(conditionalOperations.includes(expr[0])){
      return handleConditionalOperations(str,expr,obj);
    }
    else if(ioOperations.includes(expr[0])){
      return handleIoOperations(expr,obj);
    }
    else if(expr.length == 1){
        obj.output.value= getValue(expr[0],obj);
        obj.output.type =  'string';
    }
    else{
        obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+expr.join(" "));
    }
    return obj;
}catch(e){
    obj.errors.push("Error: Evaluating expression ["+ str +"]");
    return obj;
}
}


module.exports = {
   parse
}