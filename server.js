const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()

// shows the port from server
app.listen(port, () => console.log(`listening on port ${port}`))



//Database config
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.DB_NAME + ":" + process.env.DB_KEY + "@blocktech-aia3c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
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
app.get("/", async (req, res) => {
    const profiles = await db.collection('profiles').find().toArray();
    res.render("base/index.ejs", {
        data,
        profiles,
        accounts
    });

    // collection.insertOne({
    //     naam: "test"
    // })
});



// send data to Profiles collection
app.post("/api/newProfile", async (req, res) => {

    console.log("BODY DATA", req.body);
    await db.collection('profiles').insertOne(req.body);
    const documents = await db.collection('profiles').find().toArray();

    console.log("DOCUMENTS", documents)
    res.send({
        data: documents
    })
})



// question-1
app.get("/quest-1", (req, res) => {
    
    res.render("base/quest-1.ejs", {
        data,
        accounts
    });
});

// question-2
app.get("/quest-2", (req, res) => {
    
    res.render("base/quest-2.ejs", {
        data,
        accounts
    });
});

// question-3
app.get("/quest-3", (req, res) => {
    
    res.render("base/quest-3.ejs", {
        data,
        accounts
    });
});

// question-result
app.get("/question-result", (req, res) => {
    
    res.render("base/question-result.ejs", {
        data,
        accounts
    });
});










// sign up profile
app.get("/newProfile", async (req, res) => {


    res.render("base/newProfile.ejs", {
        data,
        profile,
        accounts
    });
});



function form(req, res) {
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

let accounts = {
    profileName: "Bob lins",
    profileAge: 24,
    profileCity: "Amsterdam",
    profileDiscription: "hier iets over mij",
}



app.use(express.static('public'))
app.set("view engine", "ejs")








// 404 page not found
app.use(function (req, res) {
    res.send("404: Page not found", 404);
});


