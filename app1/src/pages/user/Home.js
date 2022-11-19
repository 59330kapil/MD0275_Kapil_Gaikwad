import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')

  const [route, setRoute] = useState([])

  const navigate = useNavigate()

  const onChangeSource = (e) => {
    const source = e.target.value
    setSource(source)
  }

  const onChangeDestination = (e) => {
    const destination = e.target.value
    setDestination(destination)
  }

  useEffect(() => listRoute(), [])
  const listRoute = () => {
    axios
      .get('http://localhost:8080/airline/user/allcities', {
        headers: { Authorization: `Bearer ${sessionStorage['token']}` },
      })
      .then((rt) => {
        console.log(rt.data)
        setRoute(rt.data)
      })
  }

  const flightOnRoute = () => {
    // check if user has really entered any value
    if (source.length === 0) {
      toast.error('please enter Source City')
    } else if (destination.length === 0) {
      toast.error('please enter Destination City')
    } else if (date.length === 0) {
      toast.error('please enter Departure Date')
    } else {
      // make the API call to check if user exists
    }

    const body = {
      source,
      destination,
      date,
    }

    console.log(body)

    console.log(sessionStorage['id'])

    axios
      .post('http://localhost:8080/airline/user/flights/route', body)
      .then((response) => {
        // get the data returned by server
        const result = response.data
        console.log(result)
        console.log(localStorage['token'])

        const temp = response.data
        console.log(response.data)
        navigate('/routeflights', { state: temp })

        // check if user's authentication is successfull
        if (result['data'] === 'null') {
          toast.error('No flights on this route')
        }
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }
  const disablePastDate = () => {
    const today = new Date()
    const dd = String(today.getDate())
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    return yyyy + '-' + mm + '-' + dd
  }

  return (
    <div>
      <div className='card justify-content-center content-container'>
        <h1 className='page-title text-center mt-3'>
          ...Welcome To BookMyTicket...
        </h1>
      </div>
      <br></br>
      <div>
        <div className='card justify-content-center content-container'>
          <h1 className='page-title text-center mt-3'>Search Flight</h1>

          <div className='row text-center justify-content-center'>
            <div className='col-md-3'>
              <label htmlFor=''>Source</label>
              <select
                class='form-select'
                aria-label='Default select example'
                onChange={onChangeSource}>
                <option selected value=''>
                  Select Source
                </option>
                {route.map((rt) => (
                  <option key={rt.id} value={rt.city}>
                    {rt.city}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-3'>
              <label htmlFor=''>Destination</label>

              <select
                class='form-select'
                aria-label='Default select example'
                onChange={onChangeDestination}>
                <option selected value=''>
                  Select Destination
                </option>
                {route.map((rt) => (
                  <option key={rt.id} value={rt.city}>
                    {rt.city}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-3'>
              <label htmlFor='departureDateAndTime'>Departure Date</label>
              <input
                type='date'
                min={disablePastDate()}
                onChange={(event) => {
                  setDate(event.target.value)
                }}
                className='form-control'
              />
            </div>
            <br></br>
            <div className='mb-3' style={{ marginTop: 40 }}>
              <div className='mb-12' style={{ textAlign: 'center' }}>
                <button onClick={flightOnRoute} style={styles.signinButton}>
                  Search Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const styles = {
  container: {
    width: 650,
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
    width: '70%',
    height: 40,
    backgroundColor: '#9f7bbe',
    color: 'white',
    borderRadius: 5,
    border: 'none',
    marginTop: 0,
  },
}

export default Home
