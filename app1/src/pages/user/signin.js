import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const Signin = () => {
  // get user inputs
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signin = () => {
    // check if user has really entered any value
    if (userName.length === 0) {
      toast.error('please enter email')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else {
      axios
        .post('http://localhost:8080/mobigic/login', {
          userName,
          password,
        })
        .then((response) => {
          const result = response.data
          console.log(result)

          navigate('/AllFlights')
        })
        .catch((error) => {
          toast.error('Someting went wrong')
          console.log(error)
          console.log(error.data)
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
        <div className='mb-3' style={{ marginTop: 40 }}>
          <div>
            Dont have an account? <Link to='/signup'>Signup here</Link>
          </div>
          <button onClick={signin} style={styles.signinButton}>
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    height: 300,
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
    marginTop: 10,
  },
}

export default Signin
