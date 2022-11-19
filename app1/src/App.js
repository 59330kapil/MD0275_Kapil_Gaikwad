import Signin from './pages/user/signin'
import Signup from './pages/user/signup'

import React, { useState, useEffect } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Link, Navigate } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

import { toast } from 'react-toastify'
import AllFlights from './pages/Admin/AllFiles'
import AllFiles from './pages/Admin/AllFiles'

//import SeatPicker1 from './pages/user/SeatPicker1'

function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  return (
    <div>
      <nav id='nav' className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          {/* 
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}

          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='nav nav-pills mx-auto'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>
                  Home
                </Link>
              </li>
              {showAdminBoard && (
                <div className='nav nav-pills ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/admin/profile'} className='nav-link'>
                      Profile
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/admin/addflights'} className='nav-link'>
                      Add Flight
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/admin/allflights'} className='nav-link'>
                      All Flights
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/allroutes'} className='nav-link'>
                      Route
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/admin/searchflights'} className='nav-link'>
                      Search
                    </Link>
                  </li>
                </div>
              )}
              {currentUser && (
                <div className='nav nav-pills ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/customerprofile'} className='nav-link'>
                      Profile
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/bookingStatus'} className='nav-link'>
                      Bookings
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/bank'} className='nav-link'></Link>
                  </li>
                </div>
              )}
              {currentUser || showAdminBoard ? (
                //profile avatar part

                <div className='nav nav-pills ml-auto'>
                  <li className='nav-item'></li>
                </div>
              ) : (
                <div className='nav nav-pills ml-auto'>
                  <li className='nav-item'>
                    <Link to={'/signin'} className='nav-link'>
                      SignIn
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/signup'} className='nav-link'>
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className='bg container mt-3'>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/AllFiles' element={<AllFiles />} />
        </Routes>
      </div>
      <div>
        <footer class='footer mt-auto py-3'>
          <div class='container text-center'>
            <span class='text-muted'></span>
          </div>
        </footer>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 135,
    height: 50,
    padding: 10,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderColor: '#9f7bbe',
    borderRadius: 10,
    broderWidth: 0.5,
    borderStyle: 'solid',
  },
}

export default App
