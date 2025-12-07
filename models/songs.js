const mongoose = require('../db');   // use the same mongoose instance

const SongSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  artist:     String,
  popularity: { type: Number, min: 1, max: 10 },
  releaseDate:{ type: Date, default: Date.now },
  genre:      [String],
});

const Song = mongoose.model('Song', SongSchema);  // collection: songs

module.exports = Song;