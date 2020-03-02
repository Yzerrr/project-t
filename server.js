let data ={
    title: "dateApp",
    page: "about",
    name: "joey"
};


const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')

app.use(express.static('public'))
app.set("view engine","ejs")

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/about", (req, res) =>{
    res.render("base/about.ejs", {data:'string'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('*', (req, res) => res.send('404'));
 

 