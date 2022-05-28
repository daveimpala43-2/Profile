import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/authContext'

export default function Home() {

    const {handleLogOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const loggout = () =>{
        handleLogOut()
        navigate("/login")
    }

    return (
        <div>

            <h1>Home</h1>

            <button onClick={loggout}>Logout</button>

        </div>
    )
}
