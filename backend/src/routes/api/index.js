const express = require('express')
const router = express.Router()

const employee = require('./user.route')
router.use('/employee',employee)

module.exports = router
