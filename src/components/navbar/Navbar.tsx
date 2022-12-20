import { useState } from 'react';

import './Navbar.css';
import {
  RiMenu3Line,
  RiMailCloseLine,
} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#wgpt3'>What is GPT3</a>
    </p>
    <p>
      <a href='#possipility'>Open AI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
    {/* </div> */}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {!toggleMenu ? (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <RiMailCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
                <Menu />
            </div>
            <div className='gpt3__navbar-menu-container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
