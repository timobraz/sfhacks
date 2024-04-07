import e from 'express';
import mongoose from 'mongoose';
/*
_id
66119456a9396edf2295ded5
post_id
661192842208d6610ed45c12
user_id
"66118ed04fdd4c566623c5ef"
image
"asdf"
trashPoints
10
descriptions
"hi this is description of my trash"
time
2000-01-01T08:00:00.000+00:00

location
Array (2)
0
37.774929
1
-122.419418
*/
export interface Post {
  post_id: string;
  user_id: string;
  image: string;
  trashPoints: number;
  descriptions: string;
  time: Date;
  location: number[];
}

const PostSchema = new mongoose.Schema({
  post_id: { type: String, required: true },
  user_id: { type: String, required: true },
  image: { type: String, required: true },
  trashPoints: { type: Number, required: true },
  descriptions: { type: String, required: true },
  time: { type: Date, required: true },
  location: { type: [Number], required: true },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;