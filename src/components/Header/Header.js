import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import linkedin from './linkedin.svg'
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={linkedin} alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>
            <div className="header-right">

            </div>
        </div>
    )
}

export default Header
