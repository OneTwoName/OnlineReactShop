import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import About from './About'
import Contacts from './Contacts'
import Profile from './Profile'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<App/>} path='/'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Contacts/>} path='/contacts'/>
            <Route element={<Profile/>} path='/profile'/>

            <Route element={<div>Not Found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
  )
}