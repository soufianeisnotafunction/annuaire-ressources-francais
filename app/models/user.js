const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt-nodejs');


// ==== USER SCHEMA =====//
 let UserSchema = new Schema({
   name:String,
   username: {type:String , required: true , index:{unique:true}},
   password: {type:String , required: true , select: false}
 });

 // =======ENCRYPTER LE PASSWORD AVANT ENREGISTREMENT ========//

 UserSchema.pre('save',function(next){
   let user = this;
   // encrypter le password seulement si il est changé ou nvx username
   if(!user.isModified('password'))
      return next();
  // generation d'encryptage
  bcrypt.hash(user.password , null , null , function(err,hash){
    if(err){
      return next(err)
    }
    user.password=hash;
    next();
  });
});

// ==== COMPARER LE PASSWORD DONNÉ ET CELUI DE LA DB =====
UserSchema.methods.comparepassword = function (password) {
  let user = this;
  return bcrypt.compareSync(password , user.password)
};

module.exports = mongoose.model('User' , UserSchema)
