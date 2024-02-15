// COMMON JS IMPORT
// const commonjsImports = require('./commonjs');
// const { printName, person } = require("./commonjs");

// commonjsImports.printName()
// console.log(commonjsImports.person)

// printName();
// console.log(person);

// ES MODULE IMPORT
// import module_example from "./module.js";

import { printRole as role } from "./module.js";

import * as module_example from "./module.js";

module_example.printRole();
// console.log(module_example.person);

// role();

console.log("I am running a node project!");
