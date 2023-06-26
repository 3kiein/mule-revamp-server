const express = require("express")
const router = express.Router()

const notices = require('../repository/notice')

// notice
router.get('/notice', (req,res) => {
    res.send(notices)
})

// market
router.get('/market', () => {})
router.post('/market', () => {})

// news
router.get('/news', () => {})
router.post('/news', () => {})

module.exports = router;