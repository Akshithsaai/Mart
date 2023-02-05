import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";

import FaStore from "../../assets/nav-logo.component";
import './navigation.styles.scss'

const Navigation = () => {

    return(
        <Fragment>
            <div className="navigation">
                <Link className="nav-logo" to='/' >
                    <FaStore/>
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP  </Link>  
                    <Link className="nav-link" to='/'>HOME</Link>
                    <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
                </div>
                
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;