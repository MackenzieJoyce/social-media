const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  password: {
    type: String,
    required: true,
    min: 6
  }
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-media',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
