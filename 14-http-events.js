const http = require("http")

const server = http.createServer()

server.on("request", (req, res)=>{
res.end("Hey boo")
})

server.listen(5000, ()=>{
 console.log("Server created successfully");
})