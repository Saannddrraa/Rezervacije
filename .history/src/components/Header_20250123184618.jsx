import React from 'react';
import '../assets/styles/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
     <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Sobe'>Sobe</Link></li>
            <li><Link to='/Apartmani'>Apartmani</Link></li>
        </ul>
        </nav>
    </header>
    
  )
}

export default Header;