/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @description Returns the sum of a and b
 * @example
 * add(1,2) // returns 3 
 */
const add = (a,b)=>{
    try{
    return a+b;
    }catch(e){
        console.log("Error in add(a,b)");
        console.log(e);
        return 0;
    }
}


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @description Returns the difference of b and a
 * @example
 * add(1,2) // returns 1
 */
const subtract = (a,b)=>{
    try{
    return b-a;
    }catch(e){
        console.log("Error in subtract(a,b)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @description Returns the product of a and b
 * @example 
 * multiply(1,2) // returns 2
 */

const multiply = (a,b)=>{
    try{
    return a*b;
    }catch(e){
        console.log("Error in multiply(a,b)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @description Returns the quotient of a and b
 * @example
 * divide(1,2) // returns 0.5
 */

const divide = (a,b)=>{
    try{
    return a/b;
    }catch(e){
        console.log("Error in divide(a,b)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @description Returns a to precision of b
 * @example
 * precision(1.234,2) // returns 1.2
 */

const precision = (a,b)=>{
    try{
    return a.toPrecision(b);
    }catch(e){
        console.log("Error in precision(a,b)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {number} a 
 * @returns {number}
 * @description Returns the rounded value of a
 * @example
 * round(1.234) // returns 1
 */

const round = (a)=>{
    try{
    return Math.round(a);
    }catch(e){
        console.log("Error in round(a)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {string} a 
 * @returns {number}
 * @description Returns the length of a
 * @example
 * length('abc') // returns 3
 */

const length = (a)=>{
    try{
    return a.length;
    }catch(e){
        console.log("Error in length(a)");
        console.log(e);
        return 0;
    }
}

/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns {string}
 * @description Returns the string a with b appended to it
 * @example
 * append('abc','def') // returns 'abcdef'
 */

const concat = (a,b)=>{
    try{
    return a.concat(b);
    }catch(e){
        console.log("Error in concat(a,b)");
        console.log(e);
        return a;
    }
}

/**
 * 
 * @param {string} a 
 * @returns {string}
 * @description Returns the string a with all the characters lowercased
 * @example
 * lowercase('ABC') // returns 'abc'
 */

const lowercase = (a)=>{
    try{
    return a.toLowerCase();
    }catch(e){
        console.log("Error in lowercase(a)");
        console.log(e);
        return a;
    }
}

/**
 * 
 * @param {string} a 
 * @returns {string}
 * @description Returns the string a with all the characters uppercased
 * @example
 * uppercase('abc') // returns 'ABC'
 */
const uppercase = (a)=>{
    try{
    return a.toUpperCase();
    }catch(e){
        console.log("Error in uppercase(a)");
        console.log(e);
        return a;
    }
}

/**
 * 
 * @param {string} a 
 * @returns {string}
 * @description Returns the string after removing spaces in the beginning and end
 * @example
 * trim(' abc ') // returns 'abc'
 */

const trim = (a)=>{
    try{
    return a.trim();
    }catch(e){
        console.log("Error in trim(a)");
        console.log(e);
        return a;
    }
}

/**
 * 
 * @param {string} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {string}
 * @description Returns the string a with the characters from b to c 
 * @example
 * substring('abcdef',1,3) // returns 'bc'
 * substring('abcdef',1) // returns 'bcdef'
 */

const substring = (a,b,c=null)=>{
    try{
    if(c == null){
    return a.substring(b);
    }else{
    return a.substring(b,c);
    }
    }catch(e){
        console.log("Error in substring(a,b,c)");
        console.log(e);
        return a;
    }
}

/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @param {string} c 
 * @returns {string}
 * @description Returns the string a with all the occurences of b replaced with c
 * @example
 * replace('abcdef','bc','BC') // returns 'aBCdef'
 */
const replace = (a,b,c)=>{
    try{
    return a.replace(b,c);
    }catch(e){
        console.log("Error in replace(a,b,c)");
        console.log(e);

        return a;
    }
}

/**
 * 
 * @param {*} a 
 * @param {string} b 
 * @param {*} c 
 * @returns {boolean|null}
 * @description 
 * It allows multiple conditions to be checked in a single line
 * It returns true if the condition is true
 * It returns false if the condition is false
 * It returns null if the condition is invalid
 * The conditions are as follows:
 * 1. a == b
 * 2. a != b
 * 3. a > b
 * 4. a < b
 * 5. a >= b
 * 6. a <= b
 * 7. a contains b
 * 8. a startswith b
 * 9. a endswith b
 * 10. a notcontains b
 * 11. a isstring b
 * 12. a isnumber b
 * 13. a isboolean b
 * 14. a isnotstring b
 * 15. a isnotnumber b
 * 16. a isnotboolean b
 * 17. a isnull b
 * 18. a isnotnull b
 * 19. a isempty b
 * 20. a isnotempty b
 * @example
 * check(1,'==',1) // returns true
 * check(1,'==',2) // returns false
 * check(1,'=',1) // returns null
 */

const getBool = (a,b,c)=>{
    try{
    switch(c){
        case '==':
            return a==b;
        case '!=':
            return a!=b;
        case '>':
            return a>b;
        case '<':
            return a<b;
        case '>=':
            return a>=b;
        case '<=':
            return a<=b;
        case 'contains':
            return a.includes(b);
        case 'notcontains':
            return !a.includes(b);
        case 'startswith':
            return a.startsWith(b);
        case 'endswith':
            return a.endsWith(b);
        case 'isempty':
            return a.length==0;
        case 'isnotempty':
            return a.length!=0;
        case 'isnull':
            return a==null;
        case 'isnotnull':
            return a!=null;
        case 'isnumber':
            return !isNaN(a);
        case 'isnotnumber':
            return isNaN(a);
        case 'isstring':
            return typeof a === 'string';
        case 'isnotstring':
            return typeof a !== 'string';
        case 'isboolean':
            return typeof a === 'boolean';
        case 'isnotboolean':
            return typeof a !== 'boolean';
        default:
            console.log("Invalid expression in getBool(a,b,c)");
            return null;
    }
}catch(e){
    console.log("Error in getBool(a,b,c)");
    console.log(e);
    return null;
}
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    precision,
    round,
    length,
    concat,
    lowercase,
    uppercase,
    trim,
    substring,
    replace,
    getBool
}