const mongoose = require("mongoose");

const primarchSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true 
},

  slug: 
  { 
    type: String, 
    index: true,
    required: true, 
    unique: true 
  },

  legionNumber: Number, // 1-20,

  legion: String, // "Ultramarines", "World Eaters", etc.

  status: {
    type: String,
    enum: ["Alive", "Dead", "Missing", "Unknown"]
},

  fate:String,

  alignment: {
    type: String,
    enum: ["Loyalist", "Traitor", "Imperium"]
  }

}, { timestamps: true });

module.exports = mongoose.model("Primarch", primarchSchema);