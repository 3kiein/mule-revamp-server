const { userData } = require("../../repository/userData.js");

module.exports = (req, res) => {
	const { userId, userPassword } = req.body;


	const cookieId = req.cookies.cookieId;
	console.log(req.cookies.cookieId)

	const userInfo = {
		...userData.filter((user) => user.userId === cookieId)[0],
	};

	if (!cookieId || !userInfo.id) {
		res.status(401).send("로그인에 실패했습니다.");
	} else {
		delete userInfo.password;
		res.send(userInfo);
	}
};
