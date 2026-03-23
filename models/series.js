const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  name: 
  {
     type: String, 
     required: true 
  },

  slug: 
  { 
    type: String, 
    required: true, 
    unique: true 
 },

  description: String,

  era: String, // "Horus Heresy", "40K"

  order: Number 
}, { timestamps: true });

module.exports = mongoose.model("Series", seriesSchema);