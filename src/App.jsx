import React from 'react'
import Navbar from './components/Navbar'
import { Route, useLocation,Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import Footer from './components/Footer'
import RoomDetails from './pages/RoomDetails'

const App = () => {

    const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div>
    {!isOwnerPath && <Navbar/>}
    <div className='min-h-[70vh]'>
    <Routes>

    <Route  path='/' element={<Home/>}/>
    <Route  path='/rooms' element={<AllRooms/>}/>
    <Route  path='/rooms/:id' element={<RoomDetails/>}/>
    {/* <Route  path='about' element={</>}/> */}

    </Routes>
    
    </div>
    <Footer/>
    </div>
  )
}

export default App
