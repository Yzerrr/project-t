const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const mongoose  = require('mongoose')
require('dotenv').config()


let data = {
    title: "dateApp",
    page: "about",
    name: "test"
};

let profile = {
    profileName: "Alexane Collins",
    profileAge: 20,
    profileCity: "Amsterdam",
    profileDiscription: "somthing about the person somthingsomthing about the person somthing about about"
};

app.use(express.static('public'))
app.set("view engine", "ejs")
// app.set("views", "base")



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.DB_NAME + ":" + process.env.DB_KEY + "@blocktech-aia3c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection = null;


MongoClient.connect(uri, function (err, client) {
    if (err) {
      throw err
    }
  
  
    collection = client.db("datingapp").collection("profiles");

})
 

app.get("/about", (req, res) => {
    res.render("base/about.ejs", {
        data, profile
    });
});


app.get("/index", (req, res) => {
    res.render("base/index.ejs", {
        data, profile
    });
    collection.insertOne({naam: "bob"})

});



// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`listening on port ${port}`))


app.use(function (req, res) {
    res.send("404: Page not found", 404);
});
