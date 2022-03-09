const { Schema, model } = require('mongoose');

 // Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String, 
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String, 
      required: true,
      unique: true,
    },
    challenges: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Challenge',
      },
    ],
  },
  {
    toJSON: {
    virtuals: true,
    },
  }
);

 // Create a virtual property 'numberOfChallenges' that gets the number of challenges a user has created
 userSchema.virtual('numberOfChallenges').get(function () {
  return this.challenges.length;
});

// Initialize User model
const User = model('user', userSchema);

module.exports = User;