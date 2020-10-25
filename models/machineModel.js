/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
import mongoose from 'mongoose';

const machineSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  state: String,
  is_healthy: Boolean,
});

const machines = mongoose.model('machines', machineSchema);

export default machines;
