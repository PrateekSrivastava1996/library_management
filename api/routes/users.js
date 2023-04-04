const express = require('express')

const router = express.Router()
const getAllUsersList = require('../controller/user')

router.get('/getAll', getAllUsersList)

module.exports = router
