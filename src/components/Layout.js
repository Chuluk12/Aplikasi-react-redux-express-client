import { Col, Container, Nav, Navbar, Row, Button } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

export const Layout = ({ children }) => {

  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link 
              to={{pathname: '/'}} 
              className="text-decoration-none text-reset"
            >
              Todo App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Link 
                  to={{pathname: '/Login'}} 
                  className="nav-link text-decoration-none text-light"
                >
                  Login
                </Link>
                <Link 
                  to={{pathname: '/register'}} 
                  className="nav-link text-decoration-none text-light"
                >
                  Register
                </Link>
                <Button variant="light" onClick={() => logOut()}>
                  Logout
                </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="my-5">
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}