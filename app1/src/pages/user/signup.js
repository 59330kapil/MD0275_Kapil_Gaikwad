import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import config from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  // get user inputs

  const [userName, setuserName] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const signup = () => {
    // check if user has really entered any value

    if (userName.length === 0) {
      toast.error('please enter email')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length === 0) {
      toast.error('please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('password does not match')
      // } else if (role.length === 0) {
      //   toast.error('please select Role')
      // } else if (role === 'ADMIN') {
      //   toast.error('Unauthorize to add admin ')
    } else {
      // make the API call to check if user exists
      axios
        .post('http://localhost:8080/mobigic/signup', {
          userName,
          password,
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data

          // check if user's authentication is successfull
          if (result['data'] === 'null') {
            toast.error('Registration Failed...')
          } else {
            toast.success('successfully registered a new user')
          }
        })
        .catch((error) => {
          toast.error('Something went wrong.')
          console.log('error')
          console.log(error)
        })
    }
  }

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className='mb-3'>
          <label>userName</label>
          <input
            onChange={(event) => {
              setuserName(event.target.value)
            }}
            className='form-control'
            type='email'
          />
        </div>

        <div className='mb-3'>
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className='form-control'
            type='password'
          />
        </div>

        <div className='mb-3'>
          <label>Confirm Password</label>
          <input
            onChange={(event) => {
              setConfirmPassword(event.target.value)
            }}
            className='form-control'
            type='password'
          />
        </div>

        {/* <div className='mb-3'>
          <label>Role</label>
          <input
            onChange={(event) => {
              setRole(event.target.value)
            }}
            className='form-control'
            type='text'
          />
        </div> */}

        {/* <label>Role</label>
        <div className='col-md-3'>
          <select class='form-select' aria-label='' onChange={onChangeRole}>
            <option selected value=''>
              Select Role
            </option>
            <option>CUSTOMER</option>
            <option>ADMIN</option>
          </select>
        </div> */}

        <div className='mb-3' style={{ marginTop: 40 }}>
          <div>
            Already have an account? <Link to='/signin'>Signin here</Link>
          </div>
          <button onClick={signup} style={styles.signinButton}>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    height: 400,
    padding: 20,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderColor: '#9f7bbe',
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',
  },
  signinButton: {
    position: 'relative',
    width: '100%',
    height: 40,
    backgroundColor: '#9f7bbe',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 20,
  },
}

export default Signup
