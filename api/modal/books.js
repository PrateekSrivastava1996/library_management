const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    country: { type: String },
    language: { type: String },
    pages: { type: String },
    year: { type: Number },
    imageLink: { type: String },
    isReturn: { type: Boolean, default: false }
  },
  {
    collection: 'books',
    timestamps: { createdAt: true, updatedAt: true }
  }
)

const Book = mongoose.model('books', BookSchema)

module.exports = Book
