import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    profileViews: {
      type: Number,
      default: 0,
      min: 0,
    },
    profileImpression: {
      type: Number,
      default: 0,
      min: 0,
    },
    location: {
      type: String,
      default: "",
    },
    occupation: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    socialLinks: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
  },
  { timeStamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
