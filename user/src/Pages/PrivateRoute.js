import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

 export const PrivateRoute = ({children}) => {
    const Auth = useSelector(state=> state.User.isAuth)
  return Auth? children : <Navigate to='/Login' />
}