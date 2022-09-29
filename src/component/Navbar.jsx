import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='left'>
                    <li><Link to='/'></Link>IndiaExpress</li>
                </ul>
                <ul className='right'>
                    <li><Link to='cart'><span className='shoppingCart'><i> <AccountBalanceIcon /> </i><span className='cartCount'>0</span></span></Link></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;