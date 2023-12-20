import mongoose, { Schema, Types } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      require: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudnary url
      require: true,
    },
    coverimg: {
      type: String,
    },
    watchhistory: [{ type: Types.Schema.objectId, ref: "video" }],
    password: { type: String, require: [true, "password is require"] },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.accessToken = async function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.accessRefreshToken = async function () {
    jwt.sign(
        {
          _id: this._id,
        },
        process.env.REFRESH_TOKEN,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
        
        )
};

export const User = mongoose.model("User", userSchema);
