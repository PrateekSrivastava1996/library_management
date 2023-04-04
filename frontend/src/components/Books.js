import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { apiBaseUrl } from '../constant/constant'
import BuyModal from '../Modal/BuyModal'
import { getBooksList, bookOnRent, bookReturn } from '../services/books'

const Books = () => {
  const navigate = useNavigate()
  const [book, setBook] = useState([])
  const [show, setShow] = useState(false)
  const [err, setErr] = useState([])

  const [bookingData, setBookingData] = useState({
    email: '',
    amount: 0,
    days: 0,
    books_id: ''
  })

  const { email, days, amount, books_id } = bookingData
  const daystorent = [15, 30, 45, 60]
  const handleClose = () => {
    setShow(false)
    setErr([])
    setBookingData({})
  }
  const handleBuy = async e => {
    e.preventDefault()
    if (validation()) {
      let data = { price: amount, email, no_of_days: days, books_id }
      const resp = await bookOnRent(data)
      console.log(resp, ':::resp')
      if ((resp.message = 'Book rented successFull')) {
        handleClose()
        getList()
      }
    }
  }
  const handleReturn = async data => {
    // let d = {
    //   no_of_days:
    // }
    // console.log(data, ':::data')
    const resp = await bookReturn(data)
    console.log(resp, ':::resp')
  }
  const validation = () => {
    let isValid = true
    let error = {}
    var mailFormat = /\S+@\S+\.\S+/
    if (!email || email.trim() == '') {
      error['email'] = 'Email is required'
      isValid = false
    } else if (!email.match(mailFormat)) {
      error['email'] = 'Invalid email'
      isValid = false
    } else if (!days) {
      error['days'] = 'Please select one'
      isValid = false
    }
    setErr(error)
    return isValid
  }
  const handleChoose = id => {
    if (id) {
      setBookingData({ ...bookingData, books_id: id })
      setShow(true)
    }
  }
  const handleChange = e => {
    const { name, value } = e.target
    setBookingData({
      ...bookingData,
      [name]: value
    })
  }
  const handleChangeDays = e => {
    setBookingData({
      ...bookingData,
      days: e.target.value
    })
  }

  useEffect(() => {
    if (days == 15) {
      setBookingData({
        ...bookingData,
        amount: 500
      })
    } else if (days == 30) {
      setBookingData({
        ...bookingData,
        amount: 550
      })
    } else if (days == 45) {
      setBookingData({
        ...bookingData,
        amount: 600
      })
    } else if (days == 60) {
      setBookingData({
        ...bookingData,
        amount: 650
      })
    } else {
      setBookingData({
        ...bookingData,
        amount: 0
      })
    }
  }, [days])

  const getList = async () => {
    const resp = await getBooksList()
    setBook(resp?.data)
  }
  useEffect(() => {
    getList()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user_token')
    navigate('/')
  }
  return (
    <>
      <button class='btn btn-primary pull-right' onClick={handleLogout}>
        Logout
      </button>
      {book?.map(b => (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Title: {b?.title}</Card.Title>
            <Card.Text>Author: {b?.author}</Card.Text>
            <Card.Text>Country: {b?.country}</Card.Text>
            <Card.Text>Language: {b?.language}</Card.Text>
            <Card.Text>Pages: {b?.pages}</Card.Text>
            <Button variant='primary'>Check </Button>
            <Button
              variant='primary'
              onClick={() => handleChoose(b?._id)}
              disabled={b?.isReturn}
            >
              {b?.isReturn ? 'Already Rented' : 'Buy on Rent'}
            </Button>
            {b?.isReturn && (
              <Button variant='primary' onClick={() => handleReturn(b)}>
                Return
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
      <BuyModal
        closeModal={handleClose}
        show={show}
        handleBuy={handleBuy}
        handleChange={handleChange}
        daystorent={daystorent}
        bookingData={bookingData}
        handleChangeDays={handleChangeDays}
        err={err}
      />
    </>
  )
}
export default Books
