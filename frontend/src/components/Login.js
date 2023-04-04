import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { loginUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [err, setErr] = useState([])
  const navigate = useNavigate()
  const handleSubmit = async () => {
    if (validation()) {
      let data = { name: username }
      const resp = await loginUser(data)
      console.log(resp, ':::resp')
      if (resp.status == 200) {
        localStorage.setItem('user_token', resp?.data?.accessToken)
        navigate('/books')
      }
    }
  }

  const validation = () => {
    let isValid = true
    let error = {}
    if (!username || username.trim() == '') {
      error['username'] = 'Username required'
      isValid = false
    }
    setErr(error)
    return isValid
  }
  return (
    <Form layout='inline'>
      <Form.Item>
        <Input
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <span style={{ color: 'red' }}>{err?.username}</span>
      </Form.Item>
      <Form.Item>
        <button onClick={handleSubmit}>Log in</button>
      </Form.Item>
    </Form>
  )
}

export default Login
