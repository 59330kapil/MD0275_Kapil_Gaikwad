import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AllFiles = () => {
  const [file, setFile] = useState([])

  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/')
  }

  const handleFileInput = () => {
    axios
      .post('http://localhost:8080/mobigic/addFile')
      .then((response) => {
        setFile(response.data)
        console.log(file)
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }

  axios
    .get('http://localhost:8080/mobigic/allFiles')
    .then((response) => {
      setFile(response.data)
      console.log(file)
    })
    .catch((error) => {
      navigate('/signin')
      console.log('error')
      console.log(error)
    })

  return (
    <div>
      <div className='card' style={{ marginTop: 70, border: '0' }}>
        <h1 className='text-center'>All Files</h1>

        <div className='my-4 text-center'>
          <form>
            <input type='file' onChange={handleFileInput}></input>
            <button
              onClick={() => handleOnClick()}
              className='btn btn-primary'
              type='submit'>
              Add New File
            </button>
          </form>
        </div>
        <div>
          <table
            className='table table-hover text-center'
            style={{ border: 5, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <thead style={{ backgroundColor: 'lightgreen', color: 'black' }}>
              <tr>
                <th scope='col'>File ID</th>
                <th scope='col'>File </th>
              </tr>
            </thead>
            <tbody style={{ fontSize: 16 }}>
              {file
                .slice()
                .reverse()
                .map((files) => (
                  <tr>
                    <td>{files.id}</td>

                    <td> test</td>
                    <td>
                      <button
                        type='button'
                        class='btn btn-warning'
                        // onClick={() => flightStatus({ flights })}
                      >
                        Status
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllFiles
