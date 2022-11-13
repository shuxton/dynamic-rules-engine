# dynamic-rules-engine
This is a rules engine that can be used to dynamically evaluate rules and execute actions based on the rules.

## Features
The rules engine supports the following features:
* Simple rules 
  It includes the following operators:
  Numeric operations: add, subtract, multiply, divide, round, precison
  String operations: concat, substring, length, replace, lowercase, uppercase, trim
  Conditional operations: if, elif, else, all, any, ==, !=, >, <, >=, <=, isnull, isnotnull, isnumber, isnotnumber, isstring, isnotstring, isboolean, isnotboolean, isempty, isnotempty, startsWith, endsWith, contains, notcontains
* Complex rules
  The rules engine supports complex rules that can be defined using the following operators:
  goto, step<#>, input
  Goto allows you to jump to a specific step in the rule. Step allows you to use the output of a specific step. Input allows you to define a variable that can be used in the rule.
* Coming soon
  Saving rules to a json file and loading them from a json file
  Defining lists and dictionaries
  Improving the step operator to allow for more complex rules
  Adding support for more operators
  Adding support for more data types
  Data validation
  Data transformation
  Data mapping

## Installation
No installation is required. Just use the parse method from parser.js to parse the rules and execute them against the data.

## Usage
The rules engine is used by calling the parse method from parser.js. The parse method takes two parameters: the rule and the data. The rule is a string and data is a JSON object. The parse method returns a JSON object with the results of the rules.
It can be called in a loop to execute multiple rules.
If you want to use the step operator, you need to pass in the stepResults parameter. The stepResults parameter is a JSON object that contains the results of the steps. The stepResults parameter is optional.
If you want to use the input operator, you need to pass in the inputResults parameter. The inputResults parameter is a JSON object that contains the results of the inputs. The inputResults parameter is optional.
If an error occurs, the parse method will return an array of errors in the results object.

It can be used as follows:
```
const parser = require('./parser');
const rule = ['(add 1 and 2)',         
              '(multiply step1 and 4)', 
              '(concat Hello and World)', 
              '(if any(5>2,4>9) then 5 else 6)' ]; 
let result = null
for (let i = 0; i < rule.length; i++) {
    result = parser.parse(rule[i], result);
    console.log(result.output.value);
}

// Output:
// 3
// 12
// HelloWorld
// 5
```

## Notes
* The rules engine is case sensitive.
* Currently, the rules engine only supports numbers and strings.
* Complex examples are not yet perfect. They will be improved in the future.

## License
Apache 2.0

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors and acknowledgment
* **Shubham N J** - *Initial work* - [shuxton]


