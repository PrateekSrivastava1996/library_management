const Books = require('../modal/books')

const getBooks = async (req, res) => {
  try {
    const checkUser = await Books.find()

    return res.status(200).json({
      success: true,
      data: checkUser
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

const addBook = async (req, res) => {
  try {
    const { author, imageLink, country, language, pages, title, year } =
      req.body
    let user = await Books.create({
      ...req.body
    })
    return res.status(200).json({
      success: true,
      message: 'Books Added',
      data: user
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
  getBooks,
  addBook
}
