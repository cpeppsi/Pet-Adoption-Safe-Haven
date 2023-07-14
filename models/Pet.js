const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petType: {
    type: String,
    enum: ["Dog", "Cat"],
  },
  petName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  adoptionStatus: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://e29koex2j9k.exactdn.com/wp-content/uploads/2022/11/cat-placeholder.svg",
  },
  introduction: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Pet", petSchema);

