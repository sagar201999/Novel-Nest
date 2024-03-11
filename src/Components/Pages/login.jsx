import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState({});

    const handleInput = (e) => {
        setLoginData((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }))
    }

    const validation = useCallback(() => {
        const newError = {};

        if (loginData.username.trim() === '') {
            newError.username = 'Username must not be empty';
        }
        if (loginData.password.length < 6) {
            newError.password = 'Password must have at least 6 characters';
        }

        setError(newError);
    }, [loginData]);

    useEffect(() => {
        // Only validate if there's user interaction (form submission or input change)
        if (Object.keys(loginData).some((key) => loginData[key] !== '')) {
            validation();
        }
    }, [loginData, validation]);
    const handleSubmit = (e) => {
        e.preventDefault();

        validation();
    }




    return (
        <div className="col-xl-12 col-md-12 d-flex flex-wrap justify-content-center  text-center bg-navy" id='login'>
            <div className="ms-panel text-center ms-panel-f w-25 me-5">
                <div className="ms-panel-header ">
                    <h1>Welcome</h1>
                    <p>we are glad to see you back with us</p>
                </div>
                <div className="ms-panel-body">
                    <form className="needs-validation" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <div className="input-group">
                                    <input type="text" className="form-control w-100" placeholder="username" name='username' value={loginData.username} onChange={handleInput} />
                                    {error && error.username && (<div className='text-danger'>{error.username}</div>)}
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                <div className="input-group">
                                    <input type="password" className="form-control w-100" placeholder="Password" name='password' value={loginData.password} onChange={handleInput} />
                                    {error && error.password && (<div className='text-danger'>{error.password}</div>)}
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-4 d-block w-100" type="submit">login</button>

                        <p className='text-center my-3'>Login with Others</p>
                        <div className="form-row">
                            <div className="col-md-12 mb-3">
                                <div className="input-group">
                                    <button type="button" className="form-control" required>
                                        Login with google
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="input-group">
                                    <button type="button" className="form-control" required>
                                        Login with facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                    <p className="mb-0 mt-3">Don't have an account? <Link className="btn-link" to="#">Create an Account</Link> </p>
                </div>
            </div>
            <div>
                <img src='../../../assets/login-bg.jpg' alt='login' className='login-image' />
            </div>
        </div>
    )
}

export default Login