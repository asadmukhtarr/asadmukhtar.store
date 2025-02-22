const express = require('express'); // import ..
const app = express(); // initialized ..
const { MongoClient } = require('mongodb');
const path = require('path');
const bodyparser = require("body-parser"); // form handling ...
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const db = "asadmukhtar";
async function connectDB(){
    try {
       await client.connect();
       console.log("Connected With Server");
       const db = client.db(db);
       console.log("Database is connected");
    } catch(error){
        console.log("Connected Database");
    }
}
connectDB().catch(console.error);
// request is for receive data ..
// response is for send output ...
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded(extended=true)); // initialized ...
app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/about',(req,res)=> {
    res.render('about');
});
app.get('/products',(req,res) => {
    res.render('products');
});
app.post('/save',(req,res) => {
    console.log('Data Got it');
})
app.get('/contact',(req,res)=> {
    res.render('contact');
});
app.listen(3030,()=> {
    console.log('Application is runing on PORT 3030');
});
