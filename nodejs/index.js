const express = require('express'); // import ..
const app = express(); // initialized ..
const { MongoClient } = require('mongodb');
const path = require('path');
const bodyparser = require("body-parser"); // form handling ...
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function connectDB(){
    try {
       await client.connect();
       console.log("Connected With Server");
       const db = client.db("asadmukhtar");
       console.log("Database is connected");
       return db;
    } catch(error){
        console.log("Connected Database");
    }
}
//connectDB().catch(console.error);
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
app.get('/products',async (req,res) => {
    try {
        const db = await connectDB(); // Get the database instance
        const collection = db.collection("products"); // Collection name
        const products = await collection.find().toArray();
       // console.log(products);
        res.render('products',{products});
    } catch(error){
        console.log("Error is",error);
    }
    //res.render('products');
});
app.post('/save', async (req,res) =>{
    const {title,description,price} = req.body;
    const product = {
        title,
        description,
        price
    }
    console.log("Product Details",product);
    try {
        const db = await connectDB(); // Get the database instance
        const collection = db.collection("products"); // Collection name
        await collection.insertOne(product);
        res.redirect("/products");
    } catch(error){
        console.log("Cant Insert Data Into MongoDB",error);
    }
});
app.get('/contact',(req,res)=> {
    res.render('contact');
});
app.listen(3030,()=> {
    console.log('Application is runing on PORT 3030');
});
