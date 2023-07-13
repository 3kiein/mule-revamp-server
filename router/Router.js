const express = require("express");
const { userData } = require("../repository/userData");
const router = express.Router();

const notices = require("../repository/noticeItems");
const news = require("../repository/newsItems");
const markets = require("../repository/marketItems");
const controllers = require("../controllers");

// notice
router.get("/notice", (req, res) => {
	res.send(notices);
});

// market
router.get("/market", (req, res) => {
	res.send(markets);
});
router.post("/market", () => {});

// news
router.get("/news", (req, res) => {
	res.send(news);
});
router.post("/news", () => {});

// login
router.post("/login", controllers.login);
router.post("/logout", controllers.logout);

router.get("/userinfo", controllers.userInfo);

module.exports = router;
