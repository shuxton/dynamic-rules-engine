const { add,multiply,subtract,divide,round,precision} = require("./evaluator");
const { getValue } = require("./util");

/**
 * @param {Array} tokens
 * @param {Object} obj
 * @returns {Object} output
 * @description
 * This function handles the numeric operations
 * It is called from interpreter.js
 * It includes the following operations:
 * add,subtract,multiply,divide,round,precision
 * @example
 * handleNumericOperations(tokens,obj);
 * tokens = ['add','1','2'];
 * returns {output:{value:"",type:null},errors:[]}
 * @private
 */

const handleNumericOperations = (tokens,obj)=>{
        let var1=null,var2=null;
        try{

        if(tokens.length == 4){
            try{
                var1 = Number(getValue(tokens[1],obj));
                var2 = Number(getValue(tokens[3],obj));  
                if(isNaN(var1) || isNaN(var2)){
                    obj.errors.push("Error: Invalid input - "+tokens[1]+" or "+tokens[3]+"\nEvaluating expression: "+tokens.join(" "));
                    return obj;
                }
            }catch(e){
                obj.errors.push("Error: Numeric operation requires numeric values - "+tokens[1]+" or "+tokens[3]+" \nEvaluating expression: "+tokens.join(" "));
                return obj
            }
           
        }else if(tokens.length == 2){
            try{
                var1 = Number(getValue(tokens[1],obj));
                if(isNaN(var1)){
                    obj.errors.push("Error: Invalid input - "+tokens[1]+"\nEvaluating expression: "+tokens.join(" "));
                    return obj;
                }
               }catch(e){
                obj.errors.push("Error: Numeric operation requires numeric values - "+tokens[1]+"\nEvaluating expression: "+tokens.join(" "));
                return obj
            }
        }
        else{
            obj.errors.push("Error: Invalid syntax"+"\nEvaluating expression: "+tokens.join(" "));
            return obj;
        }

        switch(tokens[0]){
            case 'add':          
                obj.output.value = add(var1,var2);
                obj.output.type = 'number';
                break;
            case 'subtract':
                obj.output.value = subtract(var1,var2);
                obj.output.type = 'number';
                break;
            case 'multiply':
                obj.output.value =  multiply(var1,var2);
                obj.output.type = 'number';
                break;
            case 'divide':          
                obj.output.value =  divide(var1,var2);
                obj.output.type = 'number';
                break;
            case 'round':
                obj.output.value =  round(var1);
                obj.output.type = 'number';
                break;
            case 'precision':
                obj.output.value =  precision(var1,var2);
                obj.output.type = 'number';
                break;
            default:
                obj.errors.push("Error: Invalid numeric operation:"+tokens[0]+"\nEvaluating expression: "+tokens.join(" "));
                break;
        }
        return obj;
    }catch(err){
        obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
        return obj;
    }
    }

module.exports = {
    handleNumericOperations
}