const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()



//Database config
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.DB_NAME + ":" + process.env.DB_KEY + "@blocktech-aia3c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let db = null;

app.use(bodyParser.json())

MongoClient.connect(uri, function (err, client) {
    if (err) {
      throw err
    }
    

  
    db = client.db("datingapp");

})

MongoClient.connect('connect', (err, connected) => {
    console.log("Conection setted")
})



// find persons | index
app.get("/index", async (req, res) => {
    const profiles = await db.collection('profiles').find().toArray();
    res.render("base/index.ejs", {
        data, profiles
    });
   
    collection.insertOne({naam: "test"})
});

app.get("/settings", (req, res) => {
    res.render("base/settings.ejs", {
        data, profile
    });
});


app.post("/api/newProfile", async (req, res) => {

    console.log("BODY DATA", req.body);
    await db.collection('profiles').insertOne(req.body);
    const documents = await db.collection('profiles').find().toArray();

    console.log("DOCUMENTS", documents)
    res.send({data: documents})
})
// sign up profile
app.get("/newProfile", async (req, res) => {
   
   
    res.render("base/newProfile.ejs", {
        data, profile
    });
});



function form (req, res) {
    res.render('newProfile.ejs')
}


let data = {
    title: "dateApp",
    page: "about",
    name: "test"
};



let profile = {
    profileName: "Alexane Collins",
    profileAge: 20,
    profileCity: "Amsterdam",
    profileDiscription: "somthing about the person somthingsomthing about the person somthing about about",
    
};




app.use(express.static('public'))
app.set("view engine", "ejs")








// 404 page not found
app.use(function (req, res) {
    res.send("404: Page not found", 404);
});
 


app.listen(port, () => console.log(`listening on port ${port}`))

