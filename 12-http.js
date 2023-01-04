const http = require("http")

const server = http.createServer((request, response) => {
 if (request.url === "/") {
  response.end("Welcome to our home page")
 }
 else if (request.url === "/about") {
  response.end("Here is our short history page")
 }
 else {

  response.end(`
 <h1>Oops</h1>
 <p>We can't find the page you are looking for</p>
 <a href="/">back home</a>`)
 }
})
// const server = http.createServer((request, response)=>{
//  if(request.url === "/"){
//   response.end("Welcome to our home page")
//   return
//  }
//  if(request.url === "/about"){
//   response.end("Here is our short history page")
//  return
//  }
//  response.end(`
//  <h1>Oops</h1>
//  <p>We can't find the page you are looking for</p>
//  <a href="/">back home</a>`)
//  return
// })

server.listen(5000)