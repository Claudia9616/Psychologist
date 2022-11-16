const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },

  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  img: {
    type: String,
  },

  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = model("User", UserSchema);
