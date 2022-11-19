import { Link } from 'react-router-dom'
import SignOut from '../pages/user/SignOut'

const Navbar2 = () => {
  return (
    <nav
      style={{ backgroundColor: '#9f7bbe' }}
      className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/home'>
          Airline
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/search'>
                Search
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/host'>
                My Homes
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/host'>
                Wishlist
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/host'>
                Host
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/signin'>
                Signin
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/signin' className='nav-link' onClick={SignOut}>
                SignOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
