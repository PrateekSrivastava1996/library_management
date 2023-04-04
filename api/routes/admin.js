const express = require('express')

const router = express.Router()

const { userLogin } = require('../controller/admin')

router.post('/check', userLogin)

module.exports = router
