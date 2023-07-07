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

  const userInfo = {
    ...userData.filter(
      (user) => user.userId === userId && user.password === userPassword
    )[0],
  };

  const cookiesOption = {
    domain: "localhost",
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  };

  if (userInfo.id === undefined) {
    res.status(401).send("Not Authorized");
  } else if (userInfo) {
    cookiesOption.maxAge = 1000 * 60 * 30;
    cookiesOption.expires = new Date(Date.now() + 1000 * 60 * 30);
    res.cookie("userId", userInfo.id, cookiesOption);
    delete userInfo.password;
    res.status(200).send(userInfo);
  }
});

module.exports = router;
