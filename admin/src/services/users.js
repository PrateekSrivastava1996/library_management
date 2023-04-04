import axios from 'axios'
import { apiBaseUrl } from '../constant/constant'

const token = localStorage.getItem('admin_token')

export const getUserList = async () => {
  const responseToken = token
  try {
    if (responseToken) {
      const response = await axios.get(`${apiBaseUrl}/users/getAll`, {
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
