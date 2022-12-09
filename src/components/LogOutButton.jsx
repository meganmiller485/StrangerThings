import React from "react";

const LogOutButton = ({ isLoggedIn }) => {
	return (
		<button
			onClick={() => {
				{
					isLoggedIn
						? localStorage.removeItem("token")
						: //CHANGE PAGES TO HOME
						  console.log("cannot log out");
				}
			}}
		>
			Log Out
		</button>
	);
};

export default LogOutButton;
