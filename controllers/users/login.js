const { userData } = require("../../repository/userData.js");

module.exports = (req, res) => {
	const { userId, userPassword, checkedCookie } = req.body;

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

	// 로그인 데이터가 없을 때
	if (userInfo.id === undefined) {
		res.status(401).send("일치하는 유저가 없습니다.");
	} else if (checkedCookie === true) {
		// 로그인을 유지하고 싶은 경우, 브라우저를 닫아도 정해준 제한시간에 따라 남는다.
		cookiesOption.maxAge = 1000 * 60 * 30;
		cookiesOption.expires = new Date(Date.now() + 1000 * 60 * 30);
		res.cookie("cookieId", userInfo.id, cookiesOption);
		res.redirect("/userinfo");
	} else {
		// 로그인을 유지하고 싶지 않는 경우 => 브라우저를 닫으면 쿠키가 사라짐
		res.cookie("cookieId", userInfo.id, cookiesOption);
		res.redirect("/userinfo");
	}
};
