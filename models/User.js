const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
  friends: [
    {
      type: Number,
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;
