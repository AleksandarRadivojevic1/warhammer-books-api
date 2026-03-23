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
    required: true, 
    unique: true 
  },

  legion: String, // "Ultramarines", "World Eaters", etc.

  status: String, // Alive / Dead / Missing

  alignment: String // Loyalist / Traitor
}, { timestamps: true });

module.exports = mongoose.model("Primarch", primarchSchema);