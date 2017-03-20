const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const resSchema = new Schema({
  img:         { type: String, required: true },
  titre:       { type: String, required: true },
  niveau:      { type: String, required: true },
  age:         { type: String, required: true },
  format:      { type: String, required: true },
  langue:      { type: String, required: true },
  description: { type: String, required: true },
  thumbnails1: { type: String, required: true },
  thumbnails2: { type: String, required: true },
  thumbnails3: { type: String, required: true }
});

module.exports = mongoose.model('Ressources', resSchema);
