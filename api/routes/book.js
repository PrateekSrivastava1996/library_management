const express = require('express')

const router = express.Router()
const { auth } = require('../middleware/auth')
const { addBook, getBooks } = require('../controller/books')

router.post('/add', addBook)
router.get('/get', auth, getBooks)

module.exports = router
