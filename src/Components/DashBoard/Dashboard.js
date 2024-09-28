import React from 'react'
import classes from './Dashboard.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Cards from '../Cards/Cards';
import Appinfo from '../Appinfo/Appinfo';
import { icons, sidebarline } from '../Constants/Constants';
import { FaBell, FaCodepen, FaCubes, FaFirstOrder, FaFreeCodeCamp, FaHandshake, FaTachometerAlt, FaWrench } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GrTasks } from 'react-icons/gr';
import { MdBolt, MdOutlineInfo } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { IoMdEye } from 'react-icons/io';
export default function Dashboard() {
    return (
        <>
            <div className="content">
                <div className={classes.divide}>
                    {/*This sidebar get data from array declared in top as constant*/ }
                    <div className={classes.sidebar}>
                        {sidebarline.map((item, index) => {
                            return (
                                <div key={index}  className={classes.link1}>
                                    <span>{index===0?<FaTachometerAlt/>:index===1?<FaChartLine/>:index===2?<GrTasks />:index===3?<MdOutlineInfo />:
                                    index===4?<HiOutlineBriefcase />:index===5?<IoMdEye />:index===6?<MdBolt />:index===7?<FaFirstOrder />:
                                    index===8?<FaFreeCodeCamp />:index===9?<FaCubes />:index===10?<FaCodepen />:index===11?<FaHandshake />:
                                    index===12?<FaBell />:<FaWrench />  }</span>
                                    <Link to="/" className={classes.link1}>{item}</Link>
                                </div>
                            )
                        })}
                    </div>

                    <div className={classes.body}>
                        {/*This cards get data from back end and show here as a bar*/ }
                        <div>
                            <Cards />
                        </div>
                        {/*This cards show all app info from back end*/ }
                        <div>
                            <Appinfo />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}