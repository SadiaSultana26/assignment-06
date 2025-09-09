


### 1) What is the difference between var, let, and const?
## - *​var:* Function-scoped, can be reassigned and redeclared.
## - ​*let:* Block-scoped, can be reassigned but not redeclared.
## - *const:* Block-scoped, cannot be reassigned or redeclared.


#### 2) What is the difference between map(), forEach(), and filter()?
### map(), forEach(), and filter() are all array methods in JavaScript used for iterating over array elements, but they serve distinct purposes and have different return values:
# forEach():
## Purpose: Executes a provided function once for each array element. It's primarily used for side effects, such as logging, modifying elements in place, or performing actions that don't require returning a new array.
## Return Value: undefined. It does not create a new array.
# map():
## Purpose: Transforms each element in an array and returns a new array containing the results of applying a provided function to every element. It's used when you want to create a new array based on the original, with each element modified.
## Return Value: A new array with the transformed elements. The original array remains unchanged.
# filter():
## Purpose: Creates a new array containing only the elements that satisfy a provided test function (i.e., the callback function returns true for those elements). It's used when you want to select a subset of elements from an array based on a condition.
## Return Value: A new array containing only the filtered elements. The original array remains unchanged.

#### 3) What are arrow functions in ES6?
## Arrow functions are a concise syntax for writing function expressions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a shorter and more elegant way to define functions compared to traditional function expressions.
#### 4) How does destructuring assignment work in ES6?
## Destructuring assignment in ES6 is a JavaScript expression that allows for the unpacking of values from arrays or properties from objects into distinct variables. This feature provides a more concise and readable way to extract data compared to traditional property access. 

#### 5) Explain template literals in ES6. How are they different from string concatenation?
## Template literals, introduced in ECMAScript 2015 (ES6), are a new way to define strings in JavaScript using backticks (``) instead of single or double quotes. They offer enhanced functionality over traditional string literals, primarily through embedded expressions and multi-line string support.
