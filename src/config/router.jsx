import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

 

import Login from '@page/login'
import Home from '@page/home'
import { AuthProvider } from '../context/authContext'
import PriveRoute from './priveRoute'


export default function router() {
  return (
    <AuthProvider>
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path='/home' element={<PriveRoute />}>
                    <Route path='/home' element={<Home />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    </AuthProvider>
    
  )
}
