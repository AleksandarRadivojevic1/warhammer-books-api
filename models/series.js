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

  era: String, // "Age of Sigmar", "41st Millennium"

  order: Number 
}, { timestamps: true });

module.exports = mongoose.model("Series", seriesSchema);