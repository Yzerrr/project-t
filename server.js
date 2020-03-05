const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')



let data = {
    title: "dateApp",
    page: "about",
    name: "test"
};


app.use(express.static('public'))
app.set("view engine", "ejs")
// app.set("views", "base")

app.get("/about", (req, res) => {
    res.render("base/about.ejs", {
        data
    });
});

app.get("/index", (req, res) => {
    res.render("base/index.ejs", {
        data
    });
});



// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`listening on port ${port}`))


app.use(function (req, res) {
    res.send("404: Page not found", 404);
});
