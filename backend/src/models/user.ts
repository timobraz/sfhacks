import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  pfp: { type: String, required: true },
  trashPoints: { type: Number, required: true },
  recycle: { type: Number, required: true },
  compost: { type: Number, required: true },
  landfill: { type: Number, required: true },
});

const User = mongoose.model('User', UserSchema);
export default User;
