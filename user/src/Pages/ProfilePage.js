import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavBarr from '../Components/NavBar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProfilePage = () => {
  const user = useSelector(state=> state.User.user)
  return (
    
    <div>
      <NavBarr></NavBarr>
      <Container>
      <h2> Bienvenur au Plannig Autorisation {user?.name} </h2>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvZQfUBXBBAERBKFTneAqGR87zovE14BYVg&usqp=CAU" />
      <Card.Body>
        <Card.Title>Profile Picture</Card.Title>
        <Button>Upload new image</Button>
        <Button>Delete </Button>
      </Card.Body>
    </Card>
      
      </Container>
    </div>
  )
}

export default ProfilePage