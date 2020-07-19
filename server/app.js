require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
mongoose.connect(
  `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.htfok.mongodb.net/<dbname>?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
