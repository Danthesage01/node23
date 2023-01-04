// Modules
const names = require("./4-namemodule")
const sayHello = require("./5-utils")
const data = require("./6-alt-module-flavor")
require("./7-mind-grenade")

console.log(names)
console.log(data)

sayHello("susan")
sayHello(names.john)
sayHello(names.peter)