module.exports = (req, res) => {
	const cookiesOption = {
		domain: "localhost",
		path: "/",
		secure: false,
		httpOnly: true,
		sameSite: "strict",
	};
  
	res.clearCookie("cookieId", cookiesOption).status(205).send("logout");
};
