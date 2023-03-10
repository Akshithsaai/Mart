
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount,ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext); 
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    const {cartCount} = useContext(CartContext);
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount> {cartCount}</ItemCount>
        </CartIconContainer>
    );
}
export default CartIcon;