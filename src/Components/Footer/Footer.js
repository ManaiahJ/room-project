import classes from './Footer.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Footer() {
    return (
       <>
       <div className={classes.footer}>
          <sapn>© Manu Technologies Private Limited 2024 - 2030 All rights reserved.</sapn>
          <Link to ="/" className = {classes.links}>FAQS</Link>
          <Link to ="/" className = {classes.links}>Blog</Link>
          <Link to ="/" className = {classes.links}>About</Link>
          <Link to ="/" className = {classes.links}>Home</Link>
       </div>
       </>
    )
}