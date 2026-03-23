const BookRoutes = require("./routes/v1/book")
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/warhammer-db");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const app = require('express')()

 
app.use("/api/v1/books",BookRoutes);



app.listen(3001, () => {
  console.log("Listening on port 3001.");
});