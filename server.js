//when deployed, env file will not load
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
console.log('current environment: ' + process.env.NODE_ENV)

//imports
const noteRoutes = require('./routes/notes')
const express = require("express");
const cors = require("cors");
const connectToDb = require('./config/connectToDb')

//create express app
const app = express();

//connection
connectToDb()

//middleware
app.use(cors());
//configuring express to read json from req body
app.use(express.json());

//routes
app.use('/', noteRoutes)

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}!`);
});
