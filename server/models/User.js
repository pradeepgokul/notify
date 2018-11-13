const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  fullName: {type: String},
  email: { type: String },
  password: { type: String },
  mobile_number: {type: String},
  userType: {type: String, default: 'customer'}
}, {collection: 'users'});


// Hash Password
UserSchema.pre('save', function(next) {
  if(!this.isModified('password'))
  return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if(err) return next(err);
    this.password = hash;
    next();
  })
});

// Compare Password
UserSchema.methods.comparePassword = function (password){
  return bcrypt.compareSync(password, this.password);
};



module.exports = mongoose.model('Users', UserSchema);
