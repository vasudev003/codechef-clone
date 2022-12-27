import home from '../cc-logo.svg';
import Button from '@mui/material/Button';
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='home'><a href='/'><img src={home} alt="Home" height="60" ></img></a></div>
      <div className='navigations' >
      <Link to="/learn"> Learn </Link>
      <Link to="/practice"> Practice </Link>
      <Link to="/compete"> Compete </Link>
        </div>
        <div className='user'>
        <Link><span className='Paid_user'>Upgrade to Pro </span></Link>
        <hr className='vertical-divider' />
        <Link to="/login">
          <Button variant="text" className='login_btn'>Login</Button>
        </Link>
        <Button variant="outlined" className='Sign_up_btn'>Sign Up</Button>
      </div>
    </header>
  )
}

export default Header