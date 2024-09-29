import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Login.module.css';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
    let handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        let errorProps = Object.keys(errors);
        if (!errorProps.length) {
            if (username == 'admin' && password == 'admin') {
                history.push('/dashboard');

            }

        }
    }

    const validate = () => {
        const errorobj = {};
        if (!username || !username.trim()) {
            errorobj.username = 'Username is required';
        } else if (username.length <= 4) {
            errorobj.username = 'Username must be at least 5 characters';
        }
        if (!password || !password.trim()) {
            errorobj.password = 'Password is required';
        } else if (password.length <= 4) {
            errorobj.password = 'Password must be at least 5 characters';
        }
        setError(errorobj);
        return errorobj;
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.form}>
                    <div className='shadow'>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className={classes.heading}>
                                <h5>MAStocks Login Page</h5>
                            </div>
                            <div className="ms-3 me-3">
                                <label for="email" className="form-label">Email:</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.username && <small className='text-danger'>{error.username}</small>}</span>
                            <div className="ms-3 me-3">
                                <label for="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.password && <small className='text-danger'>{error.password}</small>}</span>
                            <div className="form-check ms-3 me-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <div>
                                <Link to="/register" className=' ms-3 mb-2 mt-2 text-decoration-none'>Create Account</Link>
                                <Link to="/forgot" className=' ms-2 mb-2 mt-2 text-decoration-none float-end me-3'>Forgot Password</Link>
                            </div>
                            <button type="submit" className="btn btn-success ms-5 mb-2 mt-3 w-75" >Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </>
            )
}