const { getBool} = require("./evaluator");
const { getValue } = require("./util");



/**
 * 
 * @param {string} expression 
 * @param {Array} tokens 
 * @param {Object} obj 
 * @returns {Object} output
 * @description
 * This function handles the conditional operations
 * It handles the any,all,if,elif operations
 * It is used in the interpreter.js file
 * This function is called when the interpreter encounters a conditional operation
 * @example
 * handleConditionalOperations(expression,tokens,obj);
 * tokens = ['any','5>2','1>9','8==8'];
 * expression = "any 5>2,1>9,8==8";
 * returns {output:{value:true,type:'boolean'},errors:[]};
 * @private
 */

const handleConditionalOperations = (expression ,tokens,obj)=>{
    let conditionaltokens="";
   try{
    if(tokens[0]=="any"){
        conditionaltokens = expression.substring(4).split(',');
        var result = false; 
           for(let i=0;i<conditionaltokens.length;i++){
             let temp = conditionaltokens[i].split(' ');
             if(temp.length == 3){
             result = result ||  getBool(getValue(temp[0],obj),getValue(temp[2],obj),getValue(temp[1],obj));
             }else{
                 result = result || temp[0]==='true';
             }
           }
            obj.output.value = result;
            obj.output.type = 'boolean';

    }else if(tokens[0]=="all"){
     conditionaltokens = expression.substring(4).split(',');
     var result = true; 
        for(let i=0;i<conditionaltokens.length;i++){
         let temp = conditionaltokens[i].split(' ');
              if(temp.length == 3){
                 result = result &&  getBool(getValue(temp[0],obj),getValue(temp[2],obj),getValue(temp[1],obj));
                 }else{
                     result = result &&  temp[0]==='true';
                 }
        }
        obj.output.value = result;
        obj.output.type = 'boolean';

    }else if(tokens[0]=="if" || tokens[0]=="elif"){
    
         if(tokens.length == 6){
           var result = getValue(tokens[1],obj);
             if(result=='true'){
                    obj.output.value = getValue(tokens[3],obj);
                    if(obj.output.type != 'goto'){
                    obj.output.type = 'string';
                    }
             }else{
                    obj.output.value = getValue(tokens[5],obj);
                    if(obj.output.type != 'goto'){
                        obj.output.type = 'string';
                        }
             }
         }
     } 
        else{
            obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
        }
        return obj;
    }catch(err){
        obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
        return obj;
    }
    }

module.exports = {
    handleConditionalOperations
}