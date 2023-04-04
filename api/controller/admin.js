const User = require('../modal/user')

const userLogin = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'User Created'
    })
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
      errors: { error: error.message },
      success: false
    })
  }
}

module.exports = {
  userLogin
}
