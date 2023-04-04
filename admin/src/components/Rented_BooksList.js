import React, { useEffect, useState } from 'react'
import { getRentedUserBooks } from '../services/books'
import Card from 'react-bootstrap/Card'

const Rented_BooksList = () => {
  const [book, setBook] = useState([])

  const getRentedBookList = async () => {
    const resp = await getRentedUserBooks()
    console.log(resp, '::::resp')
    setBook(resp?.data)
  }
  useEffect(() => {
    getRentedBookList()
  }, [])
  return (
    <>
      {book?.map(b => (
        <Card style={{ width: '18rem', borderBottom: '2px solid' }}>
          <Card.Body>
            <Card.Title>Title: {b?.title}</Card.Title>
            <Card.Text>Author: {b?.author}</Card.Text>
            <Card.Text>Country: {b?.country}</Card.Text>
            <Card.Text>Language: {b?.language}</Card.Text>
            <Card.Text>Pages: {b?.pages}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Rented_BooksList
