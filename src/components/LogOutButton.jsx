import React from "react";
import { Link } from "react-router-dom";

const LogOutButton = () => {
	return (
		<button
			onClick={() => {
				{
					localStorage.removeItem("token");
				}
			}}
		>
			<Link to='/'>Log Out</Link>
		</button>
	);
};

export default LogOutButton;
