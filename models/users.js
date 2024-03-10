const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
  {
    email: String,
    lastname: String,
    firsname: String,
  },
  {
    timestamps: false,
  }
);

module.exports = {
  collectionName: "users",
  modelName: "users",
  schema,
};
