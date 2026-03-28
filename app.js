const BookRoutes = require("./routes/v1/book")
const AuthorRoutes = require("./routes/v1/author")
const PrimarchRoutes = require("./routes/v1/primarch")
const SeriesRoutes = require("./routes/v1/series")
const mongoose = require("mongoose");
const morgan = require('morgan')


mongoose.connect("mongodb://localhost:27017/warhammer-db");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});



const app = require('express')()

app.use(morgan('tiny'))

 
app.use("/api/v1/books",BookRoutes);
app.use("/api/v1/authors",AuthorRoutes);
app.use("/api/v1/primarchs", PrimarchRoutes);
app.use("/api/v1/series", SeriesRoutes);



app.listen(3001, () => {
  console.log("Listening on port 3001.");
});