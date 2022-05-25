const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to DB
mongoose.connect('mongodb://localhost:27017/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

//read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update photo
// const id = '628deac484255aa20ac6a855';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo title 111 updated',
//     description: 'Photo description 111 lorem ipsum updated',
//   },
//   {
//       new: true
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete photo
// const id = '628df06944dc5b4930be4b84';
// Photo.findByIdAndDelete(id, (err, data) => {
//     console.log('Photo is removed.')
// })
