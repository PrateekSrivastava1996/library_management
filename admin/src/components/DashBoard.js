import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserList } from '../services/users'

const DashBoard = () => {
  const useEffect =
    (() => {
      const getUsers = async () => {
        const resp = await getUserList()
        console.log(resp, ':::::')
      }
      getUsers()
    },
    [])
  return (
    <div>
      <ul>
        <li>
          <Link to='/dashboard/BooksList'>Book List</Link>
        </li>
        {/* <li>
          {' '}
          <Link to='/dashboard/rented_booksList'>Rented Books List</Link>
        </li>
        <li>Total users:</li> */}
      </ul>
    </div>
  )
}

export default DashBoard
