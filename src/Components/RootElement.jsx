import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootElement() {
  return (
    <div>
       <Navbar/>
        <Outlet/>
        <Footer/>
      
      
    </div>
  )
}