import React, { useState, useEffect } from 'react'
import { getRentedUserBooks } from '../services/books'

const RentedBook = () => {
  const [rentedBook, setRentedBook] = useState([])
  const getData = async () => {
    const resp = await getRentedUserBooks()
    console.log(resp, ':::')
  }
  getData()
  return <div>He</div>
}

export default RentedBook
