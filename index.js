const express = require("express");
const app = express();
const { connectToMongoDb } = require("./connect");
const routeUrl = require("./routes/url.route");
const port = 3000;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("Connected to MongoDB")
);
app.use(express.json()); // ye hamne isiliiye lagaya hai taaki hamko json data mil sake,aur incoming body aye to usko parse kar sake easly
app.use("/url.route", routeUrl);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
