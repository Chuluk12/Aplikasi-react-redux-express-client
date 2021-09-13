import axios from 'axios'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { Layout } from '../../components/Layout'

const LoginPage = () => {
  const { history } = useRouter()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:8000/auth/login`, loginData)
      if(res.data.code === 200){
        localStorage.setItem('token', res.data.data.access_token)
        localStorage.setItem('isLogin', JSON.stringify(true))
        history.push("/")
      }else {
        alert(res.data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Layout> 
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label> Name </Form.Label>
          <Form.Control 
            type="text"
            name="username" 
            value={loginData.username} 
            onChange={onChangeField} 
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name="password" 
            value={loginData.password} 
            onChange={onChangeField} 
          />
        </Form.Group>
        
        <Button className="mt-5" type="submit" block>Login</Button>
      </Form>
    </Layout>
  )
}

export { LoginPage }                          