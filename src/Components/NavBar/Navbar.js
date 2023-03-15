import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  return (
    <div className='navbar'>
       <img className='logo'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='NETFLIX LOGO'/>
       <ul className='list'>
        <li className='list-1'>Home</li>
        <li className='list-1'>About</li>
        <li className='list-1'>contact</li>
        <li>
           <a href="#"  className='list-2'>
             <FontAwesomeIcon icon={faSearch} size="xl" color="#333" />
           </a>
         </li>
       </ul>
       <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='Avatar'/>
      </div>
  )
}

export default Navbar

