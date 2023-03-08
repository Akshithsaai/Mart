import './cart-icon.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext); 
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    const {cartCount} = useContext(CartContext);
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {cartCount}</span>
        </div>
    );
}
export default CartIcon;