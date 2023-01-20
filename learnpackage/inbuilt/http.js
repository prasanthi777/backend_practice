let http = require('http');
// req= what we send to server
// response= what server return
let server= http.createServer (function(req, res){
    res.write('<h1> Hi from nodejavascript </h1>')
    res.end()
})
server.listen(7803)