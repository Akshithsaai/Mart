import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles'


const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
    return(
        <CartDropDownContainer>
            <CartItems>
                {
                   (cartItems.length===0) ? (<EmptyMessage as='span' >Your Cart is Empty!</EmptyMessage>)  : (cartItems.map((item) =>
                   (<CartItem key={item.id} cartItem={item}/>)))
                }
            </CartItems>
            <Button onClick={goToCheckOutHandler}>Go to Checkout </Button>
        </CartDropDownContainer>
    );
}

export default CartDropDown;