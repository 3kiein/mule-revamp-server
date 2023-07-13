module.exports = (req, res) => {
    const cookiesOption = {
      domain: "localhost",
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    };
  
    res.status(205).clearCookie("cookieId", cookiesOption).send("logout");
  };
  