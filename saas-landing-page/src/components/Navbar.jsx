import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
       
       <nav>
        <div className='Navbar'>
          <h1 className='logo'>FLUXO</h1>
          <ul className='Navigation-list'>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
            
          </ul>
          
          <div className="navbar-actions">
             <a href="#" className='sign'>Sign in</a>
             <button>Get Started</button>
          </div>
          
        </div>
       </nav>
    </div>
  )
}

export default Navbar
