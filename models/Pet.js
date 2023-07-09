const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({ 
    pet_type: {
      type: String, 
      enum: ["Dog", "Cat", "Other"]
    },
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ["Male", "Female"]
    },
    image: {
      type: String,
      default: '/images/Image-Coming-Soon.png'
    },
    attribute: {
      type: String, 
      required: false
    }
})

module.exports = mongoose.model('Pet', petSchema)
