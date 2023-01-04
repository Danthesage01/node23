// GLOBALS in NODE - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules(commonJS)
// module     - info about current module(file)
// process    - info about env where the program is being executed
// console.log
// setInterval
// setTimeout


console.log(__dirname, "__dirname")
// setInterval(()=>{
// console.log("Hello World");
// }, 1000)
setTimeout(() => {
 console.log("Hello World");
}, 10000)