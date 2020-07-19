var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import them burger routes and give the server access to them.
var routes = require("./controllers/shopController.js");
app.use(routes);


// "I'm listening"
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("This is Dr. Frasier Crow. I'm listening on: http://localhost:" + PORT);
});
