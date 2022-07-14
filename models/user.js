import { Schema, model, models } from 'mongoose';
const userSchema = Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 1025,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = models.User || model("User" , userSchema)
export default User;
