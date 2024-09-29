import React, { useState } from 'react'
import classes from './Registration.module.css'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({
        username: '',
        password: ''

    })

    const history = useHistory();

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
        if (!confirmpassword || !confirmpassword.trim()) {
            errorobj.confirmpassword = 'Confirm Password is required';
        } else if (confirmpassword !== password) {
            errorobj.confirmpassword = 'Confirm Password must be same as Password';
        }
        if (!email || !email.trim()) {
            errorobj.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errorobj.email = 'Invalid email address';
        }
        setError(errorobj);
        return errorobj;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        let errorProps = Object.keys(errors);
        if (!errorProps.length) {
            alert('registration successful')
            history.push('/login')
        }
    }
    return (
        <>
            <div className='pt-5'>
                <div className={classes.form}>
                    <div className='shadow'>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className={classes.heading}>
                                <h5>MAStocks Registration    Page</h5>
                            </div>
                            <div className="ms-3 me-3">
                                <label for="email" className="form-label">UserName:</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.username && <small className='text-danger'>{error.username}</small>}</span>
                            <div className="ms-3 me-3">
                                <label for="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.email && <small className='text-danger'>{error.email}</small>}</span>
                            <div className="ms-3 me-3">
                                <label for="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.password && <small className='text-danger'>{error.password}</small>}</span>
                            <div className="ms-3 me-3">
                                <label for="pwd" className="form-label">Confirm Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.confirmpassword && <small className='text-danger'>{error.confirmpassword}</small>}</span>
                            <div>
                                <button type="submit" className="btn btn-primary ms-3 mb-2 mt-3 " >Save</button>
                                <Link to="/login" className="btn btn-primary ms-3 mb-2 mt-3" >Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}