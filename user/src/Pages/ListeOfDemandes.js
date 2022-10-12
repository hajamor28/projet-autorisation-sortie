import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDemandes, GetAllDemands, GetMesDemandes, UpdateDemandsStatus } from '../Redux/DemandeSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import NavBarr from '../Components/NavBar';
import Row from 'react-bootstrap/Row';

const ListeOfDemandes = () => {
  const User = useSelector(state => state.User.user)
  const AllDemads = useSelector(state => state.Demand?.demands)
  const MyDemands = useSelector(state => state.Demand?.myDemands)
  console.log(MyDemands)

  const dispatch = useDispatch()
  useEffect(() => {

    User?.Role == 'user' && dispatch(GetMesDemandes())

    User?.Role == 'admin' && dispatch(GetAllDemands())

  }, [])
  const [Etat, setEtat] = useState('pending')
  return (
    <div>
      <NavBarr></NavBarr>
      {(User?.Role == 'admin' && AllDemads && AllDemads || User?.Role == 'user' && MyDemands && MyDemands).map(el =>
        <div>
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Demande </Card.Title>
              <Card.Text>
                Nom de l'employé : {el.owner?.name}
              </Card.Text>
              <Card.Text>
                {el.owner?.email}
              </Card.Text>

              <Card.Subtitle className="mb-2 text-muted"> {el.debutjournée} - {el.finjournée}  </Card.Subtitle>
              <Card.Text>
                Date : {el.Debuthours} - {el.finhours}
              </Card.Text>
              <Card.Text>
                Matricule : {el.Matricule}
              </Card.Text>
              <Card.Text>
                {el.msg}
              </Card.Text>
              {User?.Role == 'admin' && <DropdownButton id="dropdown-basic-button" title={el.status}>
                <Dropdown.Item onClick={(e) => setEtat(e.target.title)} href="#/action-2" title="Accepted">Accepted</Dropdown.Item>
                <Dropdown.Item onClick={(e) => setEtat(e.target.title)} href="#/action-3" title='Refused'>Refused</Dropdown.Item>
              </DropdownButton>}
              {User?.Role == 'user' && <Card.Text style={{ color: 'blue' }}>
                {el.status}
              </Card.Text>}
              {User?.Role == 'admin' && <Button onClick={() => dispatch(UpdateDemandsStatus({ id: el._id, status: Etat }))} variant="light">Validate the demand</Button>}
              {User?.Role == 'user' && <Button onClick={() => dispatch(DeleteDemandes(el._id))} variant="danger">Delete the demand</Button>}

            </Card.Body>
          
          </Card>
        </div>

      )}
    </div>
  )
}

export default ListeOfDemandes
