import mongoose, { Schema } from 'mongoose';

export interface Post {
  user_id: Schema.Types.ObjectId;
  image: string;
  trashPoints: number;
  descriptions: string;
  time: Date;
  location: number[];
  description: string;
}

const PostSchema = new mongoose.Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  image: { type: String, required: true },
  trashPoints: { type: Number, required: true },
  time: { type: Date, required: true },
  description: { type: String, required: false },
  location: { type: [Number], required: true },
  recycle: { type: Number, required: true },
  compost: { type: Number, required: true },
  landfill: { type: Number, required: true },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
