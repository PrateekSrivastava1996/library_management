const AllUsers = require('../modal/user')

const getAllUsersList = async (req, res) => {
  try {
    const users = await AllUsers.count({ role: 'user' })
    if (users) {
      return res.status(200).json({
        success: true,
        data: users,
        code: 200
      })
    }
  } catch (err) {
    return res.status(400).json({
      code: 400,
      message: err.message,
      errors: { error: err.message },
      success: false
    })
  }
}

module.expots = getAllUsersList
