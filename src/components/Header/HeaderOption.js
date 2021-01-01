import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="header-option">
            {Icon && <Icon id="header-option-icons" /> }
            {
                avatar && (
                    <avatar className="header-option-icon" src={avatar} />
                )
            }
            <h3 id="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOption
