const { userData } = require("../../repository/userData.js");

module.exports = (req, res) => {
	const cookieId = req.cookies.cookieId;

	const userInfo = {
		...userData.filter((user) => user.id === cookieId)[0],
	};

	if (!cookieId || !userInfo.id) {
		res.status(401).send("로그인에 실패했습니다.");
	} else {
		delete userInfo.password;
		res.send(userInfo);
	}
};
