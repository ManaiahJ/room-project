import { FaBook, FaChartLine, FaPenSquare, FaRegFilePowerpoint, FaStickyNote, FaTachometerAlt } from 'react-icons/fa'
import { appinfo, MyApps } from '../Constants/Constants'
import classes from './Appinfo.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { IoIosLogOut, IoMdEye } from 'react-icons/io'
import { MdBolt } from 'react-icons/md'
import { FaFirstOrder } from 'react-icons/fa'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { FaCubes } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaWrench } from 'react-icons/fa'
import { GrTasks } from 'react-icons/gr'
import { MdOutlineInfo } from 'react-icons/md'
import { CiUser } from 'react-icons/ci'
import { TiCog } from 'react-icons/ti'

function Appinfo() {
    return (
        <>
            <div>
                <div className={classes.gridcontainer}>
                    <div className={classes.cardwh01}>
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title border-bottom">AllApps</h3>
                                <div className={classes.item1}>
                                    {appinfo.map((item, index) => {
                                        return (
                                            <>
                                                <div className="col-xl-2">
                                                    <span className='pt-2 pb-2 pl-2 ms-3'>{index === 0 ? <FaTachometerAlt /> : index === 1 ? <FaChartLine /> : index === 2 ? <GrTasks /> : index === 3 ? <MdOutlineInfo /> :
                                                        index === 4 ? <HiOutlineBriefcase /> : index === 5 ? <IoMdEye /> : index === 6 ? <MdBolt /> : index === 7 ? <FaFirstOrder /> :
                                                            index === 8 ? <FaFreeCodeCamp /> : index === 9 ? <FaCubes /> : index === 10 ? <FaCodepen /> : index === 11 ? <FaHandshake /> :
                                                                index === 12 ? <FaBell /> : <FaWrench />}</span>
                                                    <div>
                                                        <sapn><Link to="/" className={classes.item2}>{item}</Link></sapn>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow">
                        <div className="card-body">
                            <h3 className="card-title border-bottom">MyApps</h3>
                            <div className={classes.item1}>
                                {MyApps.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-xl-2">
                                                <div key={index}>
                                                    <span className=' ms-3 '>{index === 0 ? <CiUser /> : index === 1 ? <FaRegFilePowerpoint/> : index === 2 ? <FaBook /> : index === 3 ? <FaStickyNote /> :
                                                        index === 4 ? <TiCog />: index === 5 ? <IoIosLogOut /> : <FaPenSquare /> }</span>
                                                    <div>
                                                        <sapn><Link to="/" className={classes.item2}>{item}</Link></sapn>
                                                    </div>
                                                </div>
                                                </div>
                                            </>
                                            )
                                })}
                                        </div >
                        </div>
                        </div>
                    </div>
                    <div className={classes.gridcontainer}>
                        <div className={classes.cardwh01}>
                            <div className="card shadow">
                                <div className="card-body">
                                    <h3 className="card-title border-bottom">YouTute</h3>
                                    <div className='card-titel pt-2 pb-2 '>
                                        Tutorial Videos
                                    </div>
                                    <div className=' pt-2 pb-2 '>
                                        Find the useful information regarding website here. Please subscribe our channel for the latest updates.
                                    </div>
                                    <div className='pt-2 pb-2'>
                                        <button type="button" className="btn btn-primary color1">GoToVideos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardwh01}>
                            <div class="card  shadow">
                                <div class="card-body">
                                    <h3 class="card-title border-bottom color1">MyNews</h3>
                                    <div className='card-titel pt-2 pb-2 '>
                                        Check the latest features
                                    </div>
                                    <div className=' pt-2 pb-2 '>
                                        Discover What's New: Check out the latest features and enhancements for an upgraded experience!
                                    </div>
                                    <div className='pt-2 pb-2 '>
                                        <button type="button" className="btn btn-primary">New Features list</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
            export default Appinfo