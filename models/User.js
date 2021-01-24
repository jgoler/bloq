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
  bio: {
    type: String
  },
  grade: {
    type: Number
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
      friend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String,
        ref: 'user'
      }
    }
  ],
  userImage: {
    type: String
  }
});
module.exports = User = mongoose.model('user', UserSchema);