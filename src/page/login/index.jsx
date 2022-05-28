import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/authContext'

export default function Login() {

   const {handleAuth} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogin = () =>{
       handleAuth("David")
       navigate("/home")
   }

  return (
    <div>

        <h1>Login :D</h1>

        <button onClick={ handleLogin }>Login Dave</button>

    </div>
  )
}
