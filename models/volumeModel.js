/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
import mongoose from 'mongoose';

const volumeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uuid: String,
  name: String,
  state: String,
  is_object_store: Boolean,
});

const volumes = mongoose.model('volumes', volumeSchema);

export default volumes;
