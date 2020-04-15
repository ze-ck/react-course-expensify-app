import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">add expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </header>
)

export default Header;