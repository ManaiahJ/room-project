import React from 'react'
import classes from './Dashboard.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Dashboard() {
    return (
        <>
            <div className="content">
                <div className={classes.divide}>
                    <div className={classes.sidebar}>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Dashboard</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Scans</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Analysis</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Stock Info</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Portifolio</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Watchlist</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Positional</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Sec Rotation</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>MB</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Tranding Stocks</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Sectors</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Deals</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1}>Alerts</Link>
                        </div>
                        <div className={classes.link1}>
                            <Link to="/" className={classes.link1} >Tooles</Link>
                        </div>
                    </div>
                    <div className={classes.body}>
                        <div className='row ms-0 me-0 '>
                            <div class="card w-25 ms-5 mt-3 shadow ">
                                <div class="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some example text. Some example text.</p>
                                </div>
                            </div>
                            <div class="card w-25 ms-5 mt-3 shadow">
                                <div class="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some example text. Some example text.</p>
                                </div>
                            </div>
                            <div class="card w-25 ms-5 mt-3 shadow">
                                <div class="card-body">
                                    <h4 class="card-title">Card title</h4>
                                    <p class="card-text">Some example text. Some example text.</p>
                                </div>
                            </div>
                            <div class="card w-25 ms-5 mt-3 shadow">
                                <div class="card-body">
                                    <h3 class="card-title">Card title</h3>
                                    <p class="card-text">Some example text. Some example text.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.gridcontainer}>
                                <div class="card width-45 shadow">
                                    <div class="card-body">
                                        <h3 class="card-title border-bottom">AllApps</h3>
                                    </div>
                                </div>
                                <div class="card width-45 shadow">
                                    <div class="card-body">
                                        <h3 class="card-title border-bottom">MyApps</h3>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={classes.gridcontainer}>
                                <div class="card width-45 shadow">
                                    <div class="card-body">
                                        <h3 class="card-title border-bottom">YouTute</h3>
                                    </div>
                                </div>
                                <div class="card width-45 shadow">
                                    <div class="card-body">
                                        <h3 class="card-title border-bottom">MyNew</h3>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}