import React from 'react'
import './footer.css'

const Footer = () => (
   
  <footer className='Footer'>
    <div className='footer__copyright'>
      &copy; {new Date().getFullYear()} 
      <a className='footer__copyright--link' href='#'>NETFLIX</a>
    </div>
  </footer>
)

export default Footer