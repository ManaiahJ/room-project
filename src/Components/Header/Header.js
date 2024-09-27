
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './Header.module.css'
export default function Header() {
    return (
        <>
            <div>
                <button className='btn btn-primary float-start mt-3 ms-2'>Home</button>
                <Link to="/login" className='btn btn-primary float-end mt-3 me-2'>Login</Link>
            </div>
        </>
    )
}