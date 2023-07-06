const express = require("express");
const { userData } = require("../repository/userData");
const router = express.Router();

const notices = require("../repository/noticeItems");
const news = require("../repository/newsItems");
const markets = require("../repository/marketItems");

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
router.post("/login", (req, res) => {
  const { userId, userPassword } = req.body;

  const userInfo = userData.filter(
    (user) => user.userId === userId && user.password === userPassword
  )[0];
  console.log(userInfo);
  if (!userInfo) {
    res.status(401).send("일치하는 유저가 없습니다.");
  } else if (userInfo) {
    delete userInfo.password;
    res.status(200).send(userInfo);
  }
});

module.exports = router;
