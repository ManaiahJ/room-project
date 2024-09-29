import React, { useState } from 'react'
import classes from './Forgotpass.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function ForgotPass() {
    const [email, setEmail] = useState('');
    const history = useHistory();
    const [error, setError] = useState({
        email: ''
    })

    const handleSubmit = (e) => {   
        e.preventDefault();
        let errors = validate();
        let errorProps = Object.keys(errors);
        if (!errorProps.length) {
            alert('forgot password successful')
            history.push('/login')
        }
    }

    const validate = () => {
        const errorobj = {};    
        if (!email || !email.trim()) {
            errorobj.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errorobj.email = 'Invalid email address';
        }
        setError(errorobj);
        return errorobj;
    }
    return (
       <>
            <div className='pt-5'>
            <div className={classes.form}>
                    <div className='shadow'>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className={classes.heading}>
                                <h5>MAStocks Forgot Password Page</h5>
                            </div>
                            <div className="ms-3 me-3">
                                <label for="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <span className='ms-3'>{error.email && <small className='text-danger'>{error.email}</small>}</span>
                            <div>
                            <button type="submit" className="btn btn-success ms-5 mb-2 mt-3 w-75" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </>
    );
}