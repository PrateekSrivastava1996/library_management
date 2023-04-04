import axios from 'axios'
import { apiBaseUrl } from '../constant/constant'

export const loginUser = async user => {
  return await axios.post(`${apiBaseUrl}/auth/login`, { ...user })
}
