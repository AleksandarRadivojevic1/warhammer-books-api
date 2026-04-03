require("dotenv").config();
const BookRoutes = require("./routes/v1/book")
const AuthorRoutes = require("./routes/v1/author")
const PrimarchRoutes = require("./routes/v1/primarch")
const SeriesRoutes = require("./routes/v1/series")
const errorHandler = require("./middleware/errorHandler")
const mongoose = require("mongoose");
const morgan = require('morgan')
const rateLimit = require("express-rate-limit")
const cors = require("cors")


mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});



const app = require('express')()

app.use(cors())
app.use(morgan('tiny'))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
})

app.use(limiter)

 
app.use("/api/v1/books",BookRoutes);
app.use("/api/v1/authors",AuthorRoutes);
app.use("/api/v1/primarchs", PrimarchRoutes);
app.use("/api/v1/series", SeriesRoutes);



app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});