import './Navbar.css';
import {
  RiMenu3Line,
  RiMailCloseLine,
} from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
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
        </div>
      </div>
        <div className='gp3__navbar-sign'>
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
    </div>
  );
};

export default Navbar;
