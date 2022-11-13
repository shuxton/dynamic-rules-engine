const { getValue } = require("./util");

var list = [["Italy, India, SA, Vietnam"],["Yes", "No"]]


/**
 * @param {Array} tokens
 * @param {Object} obj
 * @returns {Object} output
 * @description
 * This function handles the IO operations
 * It handles the print operation
 * It is used in the interpreter.js file
 * This function is called when the interpreter encounters a IO operation
 * @example
 * handleIoOperations(tokens,obj);
 * tokens = ["print","Hello","World"]
 * returns {output:{value:"Hello World",type:'label'},errors:[]}
 * @private
 */

const handleIoOperations = (tokens,obj)=>{

    try{
      var var1 = "";
      if(tokens[0]=="print")
      {
          for(let i=1;i<tokens.length;i++){
              if(tokens[i][0] == '#'){
                    if(tokens[i].includes('list')){
                        try{
                      obj.output.list =  eval('list['+tokens[i].substring(5)+']');
                      obj.output.type = 'list';
                        }catch(e){
                            obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
                        }
                    }
                    
              }else
              var1 = var1 +" "+getValue(tokens[i],obj);

          }
          obj.output.value = var1+" ";
      }
      if(obj.output.type == null)
        obj.output.type = 'label';

      return obj;
    }catch(err){
        obj.errors.push("Error: Invalid Syntax"+"\nEvaluating expression: "+tokens.join(" "));
        return obj;
    }
  }

module.exports = {
    handleIoOperations
}