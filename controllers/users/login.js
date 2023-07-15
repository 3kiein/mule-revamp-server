const { userData } = require("../../repository/userData.js");

module.exports = (req, res) => {
	const { userId, userPassword, checkedCookie } = req.body;

	const userInfo = {
		...userData.filter(
			(user) => user.userId === userId && user.password === userPassword
		)[0],
	};

	/* userinfo === { id: '1', userId: 'kimcoding', password: '1234' } */

	const cookiesOption = {
		domain: "localhost",
		path: "/",
		secure: false,
		httpOnly: true,
		sameSite: "strict",
	};

	/* checkedCookie = true, false */

	// 로그인 데이터가 없을 때
	if (userInfo.id === undefined) {
		res.status(401).send("일치하는 유저가 없습니다.");
	} else if (checkedCookie === true) {
		// 로그인을 유지하고 싶은 경우, 브라우저를 닫아도 정해준 제한시간에 따라 남는다.
		cookiesOption.maxAge = 1000 * 60 * 30;
		cookiesOption.expires = new Date(Date.now() + 1000 * 60 * 30);
		res.cookie("cookieId", userInfo.id, cookiesOption);
		res.redirect("/userinfo");
		/* userInfo.id = 1 */
	} else {
		// 로그인을 유지하고 싶지 않는 경우 => 브라우저를 닫으면 쿠키가 사라짐
		res.cookie("cookieId", userInfo.id, cookiesOption);
		res.redirect("/userinfo");
	}
};

/*
로그인 요청 시 쿠키를 서버로 전송하려면, 클라이언트에서 쿠키를 설정하고 요청 헤더에 Cookie 필드에 쿠키 값을 포함시켜야 합니다. 클라이언트 측에서 쿠키를 설정하고 요청에 쿠키를 포함시키는 방법은 클라이언트의 언어 또는 라이브러리에 따라 다를 수 있습니다.

예를 들어, JavaScript를 사용하는 경우, 클라이언트에서 쿠키를 설정하고 요청에 쿠키를 포함시키는 방법은 다음과 같습니다:


// 쿠키 설정
document.cookie = "cookieId=your-cookie-value";

// 요청 보내기
fetch("http://localhost:3001/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId: "your-username", userPassword: "your-password" }),
  credentials: "include", // 쿠키 포함 옵션
})
  .then((response) => {
    // 응답 처리
  })
  .catch((error) => {
    // 에러 처리
  });
위의 예시에서 document.cookie를 사용하여 클라이언트에서 쿠키를 설정하고, credentials: "include"를 요청에 추가하여 쿠키를 포함시킵니다.
*/
