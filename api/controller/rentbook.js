const BookRent = require('../modal/bookrent')
const Book = require('../modal/books')
const moment = require('moment')

const addRentBook = async (req, res) => {
  try {
    const { price, email, no_of_days, books_id } = req.body

    await Book.findByIdAndUpdate(books_id, {
      isReturn: true
    })

    let bookrented = await BookRent.create({
      price,
      email,
      no_of_days,
      books_id,
      user_id: req.user._id
    })

    return res.status(200).json({
      success: true,
      message: 'Book rented successfully',
      data: bookrented
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

const getAllUserRentedBooks = async (req, res) => {
  try {
    const getBooks = await BookRent.find({ user_id: req.user._id }).lean()
    console.log(getBooks, ":::::bookss")
    const arr = []
    for (let w of getBooks) {
      const userFind = await Book.find({ _id: w?.books_id })
      w.books = userFind
      arr.push(w)
    }

    return res.status(200).json({
      success: true,
      message: 'Fetched successfully',
      data: arr
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

const returnBook = async (req, res) => {
  try {
    // console.log(req.body, ':::::books_id')
    const { books_id } = req.body

    // req.body.books_id?.map(async w => {
    // })

    const findBook = await BookRent.find({ books_id: req.body._id })
    console.log(findBook, ':::findBook')
    const rentDate = new Date(req.body.updatedAt)
    console.log(rentDate, ':::::rent')
    let maxTime = moment(new Date())
    maxTime = moment(rentDate).add(findBook[0].no_of_days, 'days')

    const returnDate = new Date(maxTime)
    console.log(maxTime, ':::::maxTime')

    const timeDiff = Math.abs(returnDate.getTime() - rentDate.getTime())
    console.log(timeDiff, ':::::timeDiff')

    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    console.log(diffDays, ':::::diffDays')

    // if (moment(new Date()).isAfter(maxTime)) {
    if (diffDays <= findBook[0].no_of_days) {
      await Book.findByIdAndUpdate(
        { _id: findBook[0]._id },
        {
          isReturn: false
        }
      )

      return res.status(200).json({
        success: true,
        message: 'Book returned successfully',
        data: findBook[0]
      })
    } else {
      return res.status(400).json({
        code: 400,
        message: "number of day's exceeded",
        success: false
      })
    }
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
  addRentBook,
  getAllUserRentedBooks,
  returnBook
}
