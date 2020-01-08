import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../facebook.svg';
import twitter from '../twitter.svg';
import instagram from '../instagram.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <h2>
          <span className='logo'>Chef</span>
          <span style={{ color: '#fff' }}>Port</span>
          <span className='logo'>.</span>
        </h2>
        <div className='footer-links'>
          <Link className='link-item' to='/GuestDashboard'>
            Recipes
          </Link>
          <Link className='link-item' to='/ChefDashboard'>
            Meet The Chefs
          </Link>
          <Link className='link-item' to='/'>
            Videos
          </Link>
          <Link className='link-item' to='/'>
            FAQ
          </Link>
        </div>
        <div className='footer-social-links'>
          <a href='https://www.facebook.com/'>
            <img width='25px' src={fb} />
          </a>
          <a href='https://twitter.com/'>
            <img width='25px' src={twitter} />
          </a>
          <a href='https://www.instagram.com/'>
            <img width='25px' src={instagram} />
          </a>
          <p>2020 &copy; All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
