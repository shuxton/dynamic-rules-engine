/**
 * @param {tokening} token
 * @param {object} obj
 * @returns {object}
 * @description
 * This function is used to get the value of the token
 * It additionally handles the step, input and goto tokens
 * @example
 * evaluateExpression(token,obj);
 */

const getValue = (token,obj)=>{
    try{
    if(token.includes('step')){
        let index = token[token.length-1];
        return obj.steps[index-1];
    }
    else if(token.includes('input')){
        return obj.input[Number(token[token.length-1])-1];
    }
    else if(token.includes('goto')){
         obj.next = token[token.length-1];
         obj.output.value = null;
         obj.output.type = 'goto';
         return ""
    }
    else{
        return token;
    }
    }catch(e){
        obj.errors.push("Error: Invalid input - "+token);
        return "";
    }

}

module.exports = {
    getValue
}