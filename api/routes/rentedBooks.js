const express = require('express')

const router = express.Router()
const { auth } = require('../middleware/auth')
const {
  addRentBook,
  returnBook,
  getAllUserRentedBooks
} = require('../controller/rentbook')

router.post('/add', auth, addRentBook)
router.get('/get', auth, getAllUserRentedBooks)
router.post('/back', auth, returnBook)

module.exports = router
