import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='header'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/login'>Login</NavLink>
			<NavLink to='/register'>Register</NavLink>
			<NavLink to='/posts'>Posts</NavLink>
		</nav>
	);
};

export default NavBar;
