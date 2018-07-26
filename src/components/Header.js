import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={"/"} activeClassName={"active-nav-link"} exact={true}>Expensify</NavLink>
        <NavLink to={"/create"} activeClassName={"active-nav-link"}>Create page</NavLink>
        <NavLink to={"/help"} activeClassName={"active-nav-link"}>Help page</NavLink>
    </header>
);

export default Header;