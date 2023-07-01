const express = require("express")
const router = express.Router()

const notices = require('../repository/noticeItems')
const news = require('../repository/newsItems')
const markets = require('../repository/marketItems')

// notice
router.get('/notice', (req, res) => {
    res.send(notices)
})

// market
router.get('/market', (req, res) => {
    res.send(markets)
})
router.post('/market', () => {})

// news
router.get('/news', (req, res) => {
    res.send(news)
})
router.post('/news', () => {})

module.exports = router;