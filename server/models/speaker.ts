import * as mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
  name: String,
  link: String,
  primary: Boolean,
  thumbnail: String,
  bio: String
});

const Speaker = mongoose.model('Speaker', speakerSchema);

export default Speaker;
