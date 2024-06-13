// In this exercise, you’ll refactor some ES5 code into ES2015.

// var PI = 3.14;
// PI = 42; // stop me from doing this!

const PI = 3.14;
PI = 42;

// - What is the difference between ***var*** and ***let***?
// You can reassign and redeclare with var. You can only reassign with let. let creates a block-scoped variable. var will hoist to the tope of the scope it is defined in.

// - What is the difference between **var** and ***const***?
// You can reassign and redeclare with var. const can never be reassigned or redeclared. const creates a block-scoped variable. var will hoist to the tope of the scope it is defined in.

// - What is the difference between **let** and **const**?
// You can reassign with let but cannot reassign or redeclare with const.

// - What is hoisting?
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).