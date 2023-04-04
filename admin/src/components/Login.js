import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { loginUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({ password: '', name: '' })
  const [err, setErr] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (validation()) {
      const resp = await loginUser(user)
      console.log(resp, ':::resp')
      if (resp.status == 200) {
        localStorage.setItem('admin_token', resp?.data?.accessToken)
        navigate('/dashboard')
      }
    }
  }
  const { name, password } = user
  const validation = () => {
    let isValid = true
    let error = {}
    if (!name || name.trim() == '') {
      error['name'] = 'Name required'
      isValid = false
    } else if (!password || password.trim() == '') {
      error['password'] = 'Password required'
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
          value={name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
        <span style={{ color: 'red' }}>{err?.name}</span>
      </Form.Item>
      <Form.Item>
        <Input
          type='password'
          placeholder='*********'
          value={password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <span style={{ color: 'red' }}>{err?.password}</span>
      </Form.Item>
      <Form.Item>
        <button onClick={handleSubmit}>Log in</button>
      </Form.Item>
    </Form>
  )
}

export default Login
