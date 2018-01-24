const express       =  require("express");
const logger        =  require("morgan");
const errorhandler  =  require("errorhandler");
const bodyParser    =  require("body-parser");
const mongoose      =  require("mongoose");
const app           =  express();
const config        =  require("./config/config");
const routes        =  require("./config/routes");

mongoose.connect(config.db);

// Use morgan for logging
app.use(logger("dev"));

// Setup body-parser to read HTTP body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(errorhandler());

app.use("/", routes);
app.listen(config.port, () => {
  console.log(`Express has started on port: ${config.port}`);
});
