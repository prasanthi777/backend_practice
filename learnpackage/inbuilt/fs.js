// write file
let fs = require('fs');
fs.writeFile('myText.txt',"This is test code",function(){
    console.log("File Created")
})
// add file
fs.appendFile('myText.txt',"This is test code 1",function(){
    console.log("File Created")
})
// read file
fs.readFile('myText.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})
// rename file
fs.rename('myText.txt','myText.txt1',function(err){
    if(err) throw err;
    console.log("File renamed")
})
// delete file(unlink)
fs.unlink('myText.txt',function(err){
    if(err) throw err;
    console.log("File deleted")
})
// not executed
let fs = require('fs');
fs.writeFile('mycode.txt',"This is test code",function(){
    console.log("File Created")
})

