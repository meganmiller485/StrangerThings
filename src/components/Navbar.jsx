import React from "react";
import { NavLink } from "react-router-dom";
import LogOutButton from "./LogOutButton";

const NavBar = ({ isLoggedIn }) => {
	return (
		<nav className='header'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/login'>Login</NavLink>
			<NavLink to='/register'>Register</NavLink>
			<NavLink to='/posts'>Post Hub</NavLink>
			<NavLink to='/profile'>Profile</NavLink>
			<LogOutButton />
		</nav>
	);
};

export default NavBar;
