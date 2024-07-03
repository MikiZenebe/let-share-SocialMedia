import mongoose, { Schema } from "mongoose";

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
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    friends: [{ type: Schema.Types.ObjectId, ref: "users" }],
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
    instagram: {
      type: String,
      default: "",
    },
    telegram: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
  },
  { timeStamps: true }
);

const userModel = mongoose.models.users || mongoose.model("users", UserSchema);
export default userModel;
