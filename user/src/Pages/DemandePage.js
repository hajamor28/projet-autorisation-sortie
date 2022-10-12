import React, { useState } from 'react'
import NavBarr from '../Components/NavBar'
import {useDispatch, useSelector} from 'react-redux'
import { AddDemande } from '../Redux/DemandeSlice'
import { useNavigate } from 'react-router-dom'

const DemandePage = () => {
  const user = useSelector(state=> state.User.user)
  const [newDemand, setNewDemand] = useState({})
  const HandleChange = (e)=>{
    setNewDemand({...newDemand, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const AddingDemand = (e)=>{
    e.preventDefault()
    dispatch(AddDemande(newDemand))
    navigate('/ListeOfDemands')
  }
  return (
    <div>
  
    <NavBarr></NavBarr>
    <div className='contain'>
    <div className="contact-box">
        <div class="contact-info">
            <div><i class="fas fa-map-marker-alt"></i>SIRAIL Tunisie,</div>
            <div><i class="fas fa-envelope"></i>Mail : contact@sirailgroup.com</div>
            <div><i class="fas fa-phone"></i>Tél: +216 71 409 251</div>
          

    </div>
        <div className="contact-form">
      
        
        <h2 style={{textAlign:"center", textTransform:"none"}}>Planning Autorisation</h2><hr/>
            <form className="contact" action="" method="post">
                <label for="fname">First name:</label>
                <input type ="text" name="name" class="text-box" placeholder="your name" value={user.name} />
                <input type ="email" name="name" class="text-box" placeholder="your mail" value={user.email}/>
                <input onChange={HandleChange} type ="text" name="Matricule" class="text-box" placeholder="your Matricule" />

                <input onChange={HandleChange} type="date"  name="debutjournée" class="text-box"  required/>
                <input onChange={HandleChange} type="date"  name="finjournée" class="text-box"  required/>
                <input onChange={HandleChange} type ="time" name="Debuthours" class="text-box" placeholder="planned Location"  required/>
                <input onChange={HandleChange} type ="time" name="finhours" class="text-box" placeholder="planned Location"  required/>
                <textarea onChange={HandleChange} name="msg" rows="3" placeholder="your message"></textarea>
                <input onClick={AddingDemand}  type ="submit"  className="send-btn" placeholder="Status" value="Envoyer" required/>
            </form>
        </div>

        </div>
        
    </div>
    </div>
  )
}

export default DemandePage
