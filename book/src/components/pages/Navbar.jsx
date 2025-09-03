import React from 'react';
import '../../css/Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/logo/BibleLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faBible, faMap, faBookOpen} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <div className="navbar">
            <img 
               src={Logo} 
               id="logo"   
            />
            <ul className='BibleLinks'>
                <li>
                    <Link to="/app">
                       <FontAwesomeIcon icon={faHouse} /> Início
                    </Link>
                </li>
                <li>
                    <Link to="/bible">
                       <FontAwesomeIcon icon={faBible} /> Bíblia
                    </Link>
                </li>
                <li>
                    <Link to="">
                       <FontAwesomeIcon icon={faMap} /> Explore
                    </Link>
                </li>
                <li>
                    <Link to="">
                       <FontAwesomeIcon icon={faBookOpen} /> Livros
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar 