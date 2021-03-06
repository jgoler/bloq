const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  school: {
    type: String
  },
  location: {
    type: String,
  },
  bio: {
    type: String
  },
  grade: {
    type: String
  },
  gender: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  friends: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId
      },
      name: {
        type: String,
        ref: 'user'
      }
    }
  ],
  userImages: [{

  }]
  /*
  userImage: {
    type: String
  }
  */
});
module.exports = User = mongoose.model('user', UserSchema);