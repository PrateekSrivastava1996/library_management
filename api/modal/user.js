const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    name: { type: String, default: null },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  {
    collection: 'users',
    timestamps: { createdAt: true, updatedAt: true }
  }
)

const User = mongoose.model('users', UserSchema)

module.exports = User
