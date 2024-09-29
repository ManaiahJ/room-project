
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './Header.module.css'
import { TbMarquee } from 'react-icons/tb'
export default function Header() {
    return (
        <>
            <div className={classes.header}>
                <div className='shadow p-4 bg-white rounded'>
                    <span className={classes.content1}>
                        <Link to="/" className={classes.links}>Deals</Link>
                        <Link to="/" className={classes.links}>Positional</Link>
                        <Link to="/" className={classes.links}>Pricing</Link>
                    </span>
                    <span className={classes.content2}>
                        <Link to="/" className={classes.links}>Scans</Link>
                        <Link to="/" className={classes.links}>Search</Link>
                        <Link to="/" className={classes.links}>Analysis</Link>
                        <Link to="/" className={classes.links}>Tools</Link>
                        <Link to="/" className={classes.links}>Tutorial</Link>
                        <Link to="/login" className={classes.links} >Login</Link>
                    </span>
                </div>
            </div>

            <div className={classes.header2}>
                <marquee>
                header line show some content
                </marquee>
            </div>

        </>
    )
}