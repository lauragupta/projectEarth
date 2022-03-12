const { Schema, model } = require('mongoose');

// Schema to create Challenge model
const challengeSchema = new Schema(
  {
    challengeTitle: {
      type: String, 
      required: true,
    },
    challengeText: {
      type: String, 
      required: true,
      minlength: 1, 
      maxlength: 500,
    },
    createdAt: {
      type: Date, 
      default: Date.now,
      immutable: true,
    },
    expiresAt: {
      type: Date,
    },
    userId: {
      type: String,
      required: true,

    },
    challengers: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        },
    ],
  },
  {
    toJSON: {
    virtuals: true,
    },
  }
);

 // Create a virtual property `numberOfChallengers` that gets the number of reactions associated with a thought
challengeSchema.virtual('numberOfChallengers').get(function () {
  return this.challengers.length;
});

//Virtual property for date
challengeSchema.virtual('date').get(function() {
  return this.createdAt.toDateString('en-US');
});

// Initialize Challenge model
const Challenge= model('challenge', challengeSchema);

module.exports = Challenge;