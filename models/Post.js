const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  content: {
    type: String,
    required: true,
    max: 1000
  }
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-media',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
