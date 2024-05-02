const { Schema, model } = require("mongoose")
const { ObjectId } = Schema.Types

const cartSchema = new Schema({
  productId: {
    type: ObjectId,
    ref: "Product",
    required: true
  },
  userId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  quantity: {
    type: Number,
    required: true
  },
  color: {
    type: ObjectId,
    ref: "Color"
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model("Cart", cartSchema)