const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: 
  { type: String, 
    required: true 
},

  slug: 
  { 
    type: String, 
    required: true, 
    unique: true 
  },

  bio: String
}, { timestamps: true });

module.exports = mongoose.model("Author", authorSchema);