import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
        if(!errorProps.length){
          if(username == 'admin' && password == 'admin'){
            history.push('/dashboard');

          }
    
    }
}

    const validate =  () => {
       const errorobj = {};
       if (!username || !username.trim()) {
        errorobj.username = 'Username is required';
       }else if (username.length <= 4) {
        errorobj.username = 'Username must be at least 5 characters';
       }
       if(!password || !password.trim()) {
        errorobj.password = 'Password is required';
       }else if(password.length <= 4) {
        errorobj.password = 'Password must be at least 5 characters';
       }
       setError(errorobj);
       return errorobj;
    }

    return (
        <>
            <div className ='content pt-5'>
            <div className =' mb-4 bg-light border w-50 mx-auto p-2 rounded shadow   '>
                <form action="#" onSubmit={handleSubmit}>
                        <div className="">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        {error.username && <small className='text-danger'>{error.username}</small>}
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {error.password && <p className='text-danger'>{error.password}</p>}
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                            </label>
                        </div>
                        <button type="submit"className="btn btn-primary" >Submit</button>
                        <Link to="/register" className='btn btn-primary ms-2 me-2'>Register</Link>
                </form>
            </div>
            
        </div>
        </>
    )
}