const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: 
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

  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Series",
    required: true
  },
  
  orderInSeries: Number,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },
  pages: Number,

  coverImage: String,

  setting: {
    era: 
        { 
        type: String, 
        required: true 
        }, // "Horus Heresy", "40K", etc.
    millennium: 
        {
         type: String, 
         required: true 
        }, // "M31", "M41", etc.

    year: String    // optional: "M31.005"
  },
  
  factions: [{
      name: String,
      slug: String
  }],

  characters: [{
    name: String,
    slug: String
  }],

    primarchs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Primarch"
  }],

  description: String
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);