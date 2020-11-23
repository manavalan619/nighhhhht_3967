
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schoolSchema = new Schema({
   name: String,
   email: String
})

const schoolModel = mongoose.model('school', schoolSchema, 'school');
export default schoolModel;
