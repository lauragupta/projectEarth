const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')

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
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    myChallenges: [
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
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

 // Create a virtual property 'numberOfChallenges' that gets the number of challenges a user has created
 userSchema.virtual('numberOfChallenges').get(function () {
  return this.myChallenges.length;
});

// Initialize User model
const User = model('user', userSchema);

module.exports = User;