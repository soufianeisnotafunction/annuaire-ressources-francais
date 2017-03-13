const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

let RessourceSchema = new Schema({
  img:         { type: String, required: true },
  titre:       { type: String, required: true },
  niveau:      { type: String, required: true },
  age:         { type: String, required: true },
  format:      { type: String, required: true },
  langue:      { type: String, required: true },
  description: { type: String, required: true },
  thumbnails:  [{ type: String, required: true }]
});


// var Res1 = mongoose.model('Res1', RessourceSchema);
// var m = new Res1,
// m.img = "http://www.velo-occasion.com/images/Fixie_modele1.jpg";
// m.titre ="apprendre le français";
// m.niveau ="1";
// m.age='enfant';
// m.format ="quizz";
// m.langue="fr";
// m.description="super ressource";
// m.thumbnails =["http://www.velo-occasion.com/images/Fixie_modele1.jpg","http://www.velo-occasion.com/images/Fixie_modele1.jpg"]

console.log(RessourceSchema);
