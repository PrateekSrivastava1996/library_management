import axios from 'axios'
import { apiBaseUrl } from '../constant/constant'

const token = localStorage.getItem('admin_token')

export const getBooksList = async () => {
  const responseToken = token
  try {
    if (responseToken) {
      const response = await axios.get(`${apiBaseUrl}/book/get`, {
        headers: { Authorization: responseToken }
      })
      if (response.status == 200) {
        return response.data
      } else {
        throw new Error(response.message)
      }
    }
  } catch (err) {
    return {
      data: '',
      status: 400,
      message: err.message
    }
  }
}

export const bookOnRent = async user => {
  const responseToken = token
  try {
    if (responseToken) {
      const response = await axios.post(`${apiBaseUrl}/rent/add`, user, {
        headers: { Authorization: responseToken }
      })
      if (response.status == 200) {
        return response.data
      } else {
        throw new Error(response.message)
      }
    }
  } catch (err) {
    return {
      data: '',
      status: 400,
      message: err.message
    }
  }
}

export const bookReturn = async user => {
  const responseToken = token
  try {
    if (responseToken) {
      const response = await axios.post(`${apiBaseUrl}/rent/back`, user, {
        headers: { Authorization: responseToken }
      })
      if (response.status == 200) {
        return response.data
      } else {
        throw new Error(response.message)
      }
    }
  } catch (err) {
    return {
      data: '',
      status: 400,
      message: err.message
    }
  }
}

export const getRentedUserBooks = async () => {
  const responseToken = token
  try {
    if (responseToken) {
      const response = await axios.get(`${apiBaseUrl}/rent/get`, {
        headers: { Authorization: responseToken }
      })
      if (response.status == 200) {
        return response.data
      } else {
        throw new Error(response.message)
      }
    }
  } catch (err) {
    return {
      data: '',
      status: 400,
      message: err.message
    }
  }
}
