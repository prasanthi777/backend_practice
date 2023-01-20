let http = require('http');
let fs = require('fs');
let port = 4588;

let server = http.createServer((req,res) => {
    fs.readFile('db.json',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})
server.listen(port)