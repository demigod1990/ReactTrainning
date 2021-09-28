import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className = 'header'>
            <img className='header_logo' src='Amazon Logo.png' alt='logo'/>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                {/* logo search button */}
            </div>
            <div className='header_nav'>
                <div className='header_options'>
                    <span className='header_optiopnLine1'> Hello </span>
                    <span className='header_optiopnLine2'> Sign In </span>
                </div>
                <div className='header_options'>
                    <span className='header_optiopnLine1'> Returns </span>
                    <span className='header_optiopnLine2'> & Order </span>
                </div>
                <div className='header_options'>
                    <span className='header_optiopnLine1'> Your </span>
                    <span className='header_optiopnLine2'> Prime </span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
