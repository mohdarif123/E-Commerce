import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='left'>
                    <li><a href=''></a>IndiaExpress</li>
                </ul>
                <ul className='right'>
                    <li><a href=''><span className='shoppingCart'><i> <AccountBalanceIcon /> </i><span className='cartCount'>0</span></span></a></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;