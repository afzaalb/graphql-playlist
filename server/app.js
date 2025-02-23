const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphQLSchema = require("./graphql/schema");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Allow Cross Origin Requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose
  .connect(
    "mongodb+srv://gqlUser:E0pLVK1CQms713CJ@cluster0.fwhil.mongodb.net/gqlDb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("Error Connecting");
  });

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
