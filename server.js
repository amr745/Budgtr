const express = require ('express');
const  app = express ();
const PORT = process.env.PORT || 3001;
// const req = require("express/lib/request");

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.send("Hello World")
})/

app.get("/budgets", (req,res) => {
    res.render("index.ejs")
});

app.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`)
});