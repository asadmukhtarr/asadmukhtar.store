const express = require('express'); // import ..
const app = express(); // initialized ..
// request is for receive data ..
// response is for send output ...
app.get('/',(req,res)=>{
    res.send("Hello Asad");
});
app.get('/students',(req,res)=> {
    res.send('Asad Studetns');
});
app.listen(3030,()=> {
    console.log('worker');
});

// const http = require('http');
// const hostname = "localhost";
// const port = 2020;
// const server = http.createServer((req,res)=>{
//     res.end('Hello Sir!');
// })
// server.listen(port,hostname,()=>{
//     console.log('Project is runnig');
// })