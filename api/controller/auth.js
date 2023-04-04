const User = require("../modal/user");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        code: 404,
        message: "Please Enter Name ",
        success: false,
      });
    }
    const checkUser = await User.find({ name: name });
    if (checkUser?.length != 0) {
      return res.status(200).json({
        success: true,
        message: "User Created",
        data: checkUser[0],
        accessToken: jwt.sign({ user:checkUser[0] }, '12345678'),
      });
    }
    let user = await User.create({ name });

    return res.status(200).json({
      success: true,
      message: "User Created",
      data: user,
      accessToken: jwt.sign({ user }, '12345678'),
    });
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
      errors: { error: error.message },
      success: false,
    });
  }
};

module.exports = {
  userLogin,
};
