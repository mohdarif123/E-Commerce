import React, { useContext } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom'
import { CartContexts } from '../Global/CartContext';

const Navbar = () => {
    const { qty } = useContext(CartContexts);
    return (
        <>
            <nav>
                <ul className='left'>
                    <li><Link to='/'></Link>IndiaExpress</li>
                </ul>
                <ul className='right'>
                    <li><Link to='cart'><span className='shoppingCart'><i> <AccountBalanceIcon /> </i><span className='cartCount'>{qty}</span></span></Link></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;