const jwt = require("jsonwebtoken");
const User = require("../modal/user");

exports.auth = async (req, res, next) => {
  const code = 401;
  if (req.headers.authorization) {
    try {
      const authorization = req.headers.authorization;
      const data = jwt.verify(authorization, '12345678');
      if (data.user) {
        let user = await User.findById(data.user._id);

        if (!user) {
          return res.status(code).json({
            code,
            message: "Authentication token is invalid",
            errors: {},
          });
        } else {
          req.user = user;
          return next();
        }
      }
      return res
        .status(code)
        .json({ code, message: "Authentication token is invalid", errors: {} });
    } catch (err) {
      return res.status(code).json({
        code,
        message: "Authentication token is invalid",
        errors: { error: err.message },
      });
    }
  } else {
    return res
      .status(code)
      .json({ code, message: "Authentication token is invalid", errors: {} });
  }
};

exports.adminAuth =async (req, res, next) => {

  const code = 401;
  if (req.headers.authorization) {
    try {
      const authorization = req.headers.authorization;
      const data = jwt.verify(authorization, '12345678');
      if (data.user) {
        let user = await User.findById(data.user._id);

        if (!user) {
          return res.status(code).json({
            code,
            message: "Authentication token is invalid",
            errors: {},
          });
        } else {
          if(user.role=='admin'){
            req.user = user;
            return next();
          }else{
            return res
            .status(code)
            .json({ code, message: "Admin token is not verified", errors: {} });
          }
         
        }
      }
      return res
        .status(code)
        .json({ code, message: "Authentication token is invalid", errors: {} });
    } catch (err) {
      return res.status(code).json({
        code,
        message: "Authentication token is invalid",
        errors: { error: err.message },
      });
    }
  } else {
    return res
      .status(code)
      .json({ code, message: "Authentication token is invalid", errors: {} });
  }
};

