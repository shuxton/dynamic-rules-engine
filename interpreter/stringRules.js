const {concat, lowercase, uppercase, trim, substring,replace ,length} = require("./evaluator");
const { getValue } = require("./util");



/**
 * @param {Array} tokens
 * @param {Object} obj
 * @returns {Object}
 * @description
 * This function handles the string operations
 * It handles the concat, length, lowercase, uppercase, trim, substring, replace operations
 * It is used in the interpreter.js file
 * @example
 * handleStringOperations(tokens,obj);
 * @private
 */

const handleStringOperations = (tokens,obj)=>{
    try{
    let var1=null,var2=null,var3=null;
    if(tokens.length == 6){
        var1 = getValue(tokens[1],obj);
        var2 = getValue(tokens[3],obj);   
        var3 = getValue(tokens[5],obj);   
    }
    else if(tokens.length == 4){
        var1 = getValue(tokens[1],obj);
        var2 = getValue(tokens[3],obj);   
    }else if(tokens.length == 2){
        var1 = getValue(tokens[1],obj);
            }
    else{
            obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
            return obj;
            }
            switch(tokens[0]){
                case 'concat':
                    obj.output.value = concat(var1,var2);
                    obj.output.type = 'string';
                    break;
                case 'length':
                    obj.output.value = length(var1);
                    obj.output.type = 'number';
                    break;
                case 'lowercase':
                    obj.output.value = lowercase(var1);
                    obj.output.type = 'string';
                    break;
                case 'uppercase':
                    obj.output.value = uppercase(var1);
                    obj.output.type = 'string';
                    break;
                case 'trim':
                    obj.output.value = trim(var1);
                    obj.output.type = 'string';
                    break;
                case 'substring':
                    obj.output.value = substring(var1,var2,var3);
                    obj.output.type = 'string';
                    break;
                case 'replace':
                    obj.output.value = replace(var1,var2,var3);
                    obj.output.type = 'string';
                    break;
                default:
                    obj.errors.push("Error: Invalid String Operation:"+tokens[0]+"\nEvaluating expression: "+tokens.join(" "));
                    break;
            }
            return obj;
        }catch(err){
            obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
            return obj;
        }
           
        }

module.exports = {
    handleStringOperations
}