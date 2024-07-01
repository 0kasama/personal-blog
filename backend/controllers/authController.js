const authService = require("../services/authService");

const login = async (req, res, next) => {
  try {
    const userLogin = req.body;
    const accessToken = await authService.login(userLogin);
    res.status(200).json({ message: "Login Success", accessToken });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = { login };
