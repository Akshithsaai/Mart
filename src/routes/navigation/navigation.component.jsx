import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import FaStore from "../../assets/nav-logo.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { NavigationComponent,NavLinks,NavLink,NavLogoContainer } from "./navigation.styles";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <NavigationComponent>
                <NavLogoContainer to='/' >
                    <FaStore/>
                </NavLogoContainer>
                
                <NavLinks>
                    <NavLink to='/shop'>SHOP  </NavLink>  
                    <NavLink to='/'>HOME</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ): (
                            <NavLink to='/auth'>SIGN IN</NavLink>
                        )
                    }
                    <CartIcon/>
                    
                </NavLinks>
                {
                    isCartOpen && <CartDropDown/> 
                }
                
            </NavigationComponent>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;