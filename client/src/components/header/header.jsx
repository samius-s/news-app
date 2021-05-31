import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import AdminPanel from '../admin-panel/admin-panel'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' style={{ textDecoration: 'none' }} >
                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                    <span>Новости</span>
                </div>
            </Link>
            <AdminPanel />
        </header>
    )
}

export default Header