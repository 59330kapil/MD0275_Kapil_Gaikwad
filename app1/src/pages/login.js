const Login = () =>{
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Login</h1>
            <div className='row'>
                <div className='col'></div>
                <div className='col-6'>
                    <div className='form'>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input className='form-control' type='email' />
                        </div>
                        <div className='mb-3'>
                            <label>Password</label>
                            <input className='form-control' type='password' />
                        </div>
                        <div className='mb-3'>
                            <buttun style={{marginRight: 10}} className='btn btn-success'>
                                Login
                            </buttun>
                            <buttun className='btn btn-danger'>Cancel</buttun>
                        </div>
                    </div>
                </div>
                <div className='col'></div>
            </div>

        </div>
    )
}
export default Login