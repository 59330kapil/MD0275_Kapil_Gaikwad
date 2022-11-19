import jwt_decode from 'jwt-decode'

const getCurrentUser = () => {
  const result = sessionStorage['role']

  console.log(result)
  return result

  // const t = jwt_decode(token)
  // console.log(t)

  // const userRole = t['role']
  // console.log('user role', userRole)
}

const getCurrentUserId = () => {
  const id = sessionStorage['id']

  // console.log(id)
  return id

  // const t = jwt_decode(token)
  // console.log(t)

  // const userRole = t['role']
  // console.log('user role', userRole)
}

const logOut = () => {
  sessionStorage.removeItem('token')
}

const getCurrentPassenger = () => {
  return JSON.parse(sessionStorage.getItem('passenger'))
}

const getCurrentFlightData = () => {
  return JSON.parse(sessionStorage.getItem('flight'))
}

const AuthService = {
  logOut,
  getCurrentUser,
  getCurrentPassenger,
  getCurrentFlightData,
  getCurrentUserId,
}
export default AuthService
