import { createContext, useState } from "react";

const AuthContext = createContext();


const initialAuth = null 


const AuthProvider = ({children}) =>{

    const [user, setAuth] = useState(initialAuth);

    const handleAuth = (e) =>{
        console.log(e)
        if(user) {
            setAuth("ajua")
        } else {
            setAuth("true")
        }
    }

    const handleLogOut = (e) =>{
        setAuth("")
    }

    const data = {user,handleAuth,handleLogOut}

    return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>
}

export {AuthProvider}
export default AuthContext
