import React,{useState} from 'react';
import logo from '../images/logo.PNG';
import {Link} from 'react-scroll';
function Navbar()
{
    const [nav,setnav] = useState(false);
    const changeBackground=()=>{
        if(window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return(
        <nav className={nav ? "nav active" : "nav"}>
            <Link to ='#' className='logo'>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='menu-icon'></span>
            </label>
            <ul>
                <li><Link to='#'> Home</Link> </li>
                <li><Link to='#'> About Us</Link> </li>
                <li><Link to='#'> Contact Us</Link> </li>
                
            </ul>

        </nav>
    )
}
export default Navbar;