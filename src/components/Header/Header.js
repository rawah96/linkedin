import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import linkedin from './linkedin.svg'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={linkedin} alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="" title="me" />
            </div>
        </div>
    )
}

export default Header
