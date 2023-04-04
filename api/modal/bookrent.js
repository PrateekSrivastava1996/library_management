const mongoose = require('mongoose')
const { Schema } = mongoose

const BookRentsSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    price: { type: Number },
    email: { type: String },
    no_of_days: { type: Number },
    books_id: { type: String },
    isReturn: { type: Boolean, default: false }
  },
  {
    collection: 'bookrents',
    timestamps: { createdAt: true, updatedAt: true }
  }
)

const BookRent = mongoose.model('bookrents', BookRentsSchema)

module.exports = BookRent
