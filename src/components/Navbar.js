import * as ImIcons from 'react-icons/im'
//import * as BsIcons from 'react-icons/bs'
import { IconContext } from 'react-icons'

import { Link } from 'react-router-dom'

import React, { useState } from 'react'
import  SidebarData from './SidebarData'
import AppName from './AppName'

import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState (false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                <Link to = "#" className ='menu-bars'>
                    <ImIcons.ImMenu3 onClick={showSidebar} /> 
                </Link>
                <AppName/>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
    {/*                 <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <BsIcons.BsFillBackspaceFill/>
                        </Link>
                    </li> */}
                    {SidebarData.map ((item, index) => {
                        return(
                            <li key={index} className = {item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span> {item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )

}

export default Navbar