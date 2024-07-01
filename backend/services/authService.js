const { validPassword } = require("../libs/bcrypt");
const { generateToken } = require("../libs/jwt");
const { users } = require("../models");

const login = async (params) => {
  try {
    const { email, password } = params;
    const user = await users.findOne({ where: { email } });
    if (!user)
      throw { name: "InvalidCredentials", message: "Wrong email or password!" };

    const isValidPassword = validPassword(password, user.password);
    if (!isValidPassword)
      throw { name: "InvalidCredentials", message: "Wrong email or password!" };

    const token = generateToken({ id: user.id, name: user.name, email: user.email });
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { login };
