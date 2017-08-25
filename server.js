//*************************************************
// 				Dependencies
//*************************************************

const override = require ("method-override");
const bodyParser = require ("body-parser");
const express = require("express");

//*************************************************
// 				Set up the server
//*************************************************
 const app = express();
 const PORT = 8080;

 // Requiring models for syncing
//var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//*************************************************
// 				Routes
//*************************************************

app.get("/", function(req,res){
 	res.render("index", xxxx)
 })


//*************************************************
//				Starts the server & listens
//*************************************************

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
