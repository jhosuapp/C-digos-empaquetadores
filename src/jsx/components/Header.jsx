import '../../sass/layaout/_header.scss';
import '../../sass/animations/_header.scss';
import {useState} from 'react';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

export const Header = ()=>{

  const [isActive, setIsActive] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const getRootCtn = document.querySelector('body');
  const getStateDarkMode = localStorage.getItem('dark-mode');

  const enableHamburger = ()=>{
    setIsEnable(current => !current);
  }

  const toggleBtn = (e)=>{
    setIsActive(current => !current);
    localStorage.getItem('dark-mode') ? localStorage.removeItem('dark-mode') :  localStorage.setItem('dark-mode', true);
  }
  getStateDarkMode ? getRootCtn.classList.add('active') : getRootCtn.classList.remove('active');

  return (
    <header className='header'>
      <div className="header-container">
        <a href="#" className="header-logo">
          <FontAwesomeIcon icon={ faCode }/>
        </a>
        <div className={isEnable ? 'active header-content' : 'header-content'}>
          <nav>
            <ul>
              <li>
                <a href="">Docs</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Sites</a>
              </li>
              <li>
                <a href="">Sites</a>
              </li>
            </ul>
          </nav>
          <div className="header-block">
            <div className="header-lng">
              <div className='header-lng__icon'>
                <FontAwesomeIcon icon={ faLanguage }/>
              </div>
              <div className="header-lng__select">
                <p>Español</p>
                <p>Ingles</p>
              </div>
            </div>
            <div className={isActive ? 'active header-mode' : 'header-mode'} onClick={ toggleBtn }>
              <span>
                <FontAwesomeIcon icon={ faMoon }/>
                <FontAwesomeIcon icon={ faSun }/>
              </span>
            </div>
          </div>
        </div>
        <div className={isEnable ? 'enable header-hamburguer' : 'header-hamburguer'} onClick={ enableHamburger }>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  )
}