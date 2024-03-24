const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "active",
    },
    contactNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
userShema.virtual("id").get(function () {
  return this._id.toHexString();
});
userShema.set("toJSON", {
  virtual: true,
});

module.exports = mongoose.model("user", userShema);
