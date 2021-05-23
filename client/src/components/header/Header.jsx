import React from 'react'
import logo from '../../assets/images/logo.png'
import AdminPanel from '../admin-panel/admin-panel'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} alt='logo' />
                {/* <h1>НОВОСТИ</h1> */}
            </div>
            <AdminPanel />
        </header>
    )
}

export default Header