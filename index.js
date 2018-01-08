console.log("Connected!!!!")
var docs = document;

//Complex types: When you access a complex type you work on a reference to its value.
// const foo = [1, 2];
// const bar = foo;  //this reference foo to have the value of bar 
// bar[0] = 9;
// console.log(foo[0], bar[0]);  // 9, 9  // so when we reasign values in a complex data type, we in essence refrence the new state value to the initial value of the first variable being mutated

//context 1
// const arg, args; //throw syntaxerr : constant variables are immutable not its values, in essence cannot be reassigned and must be initialized during declaration
// arg = 'Hello';
// args = `${arg} world` 

// context 2
// const arg = [2,3,4];
// arg[2] = 20;  // [2,3 20] // constant value can be reassigned


