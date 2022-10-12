import React from 'react'
import {Navbar,Nav,Container, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import { LogOut } from '../Redux/UserSlice'
import {useDispatch} from 'react-redux'

const NavBarr = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.User.isAuth)
  const dispatch = useDispatch()
  const logged = ()=>{
    dispatch(LogOut())
    navigate('/Login')
  }
  return (
    
    <div>
         <Navbar bg="primary" variant="dark">
        <Container>
        
          
          <Nav className="me-auto">
        
          {isAuth ? <>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/DemandePage">Demande</Nav.Link>
            <Nav.Link as={Link} to="/ListeOfDemands">Liste des Demandes</Nav.Link>

            <Button onClick={logged} variant="outline-secondary">LogOut</Button> 
          </>:
          
          
           <>
          <Nav.Link as={Link} to="/">Register</Nav.Link>
          <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </>}
           </Nav>
            
        </Container>
     </Navbar>
   </div>
  )
}

export default NavBarr