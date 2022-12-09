import React from "react";

const Home = ({ user }) => {
	return (
		<div>
			<h1>Welcome {user?.username}!</h1>
		</div>
	);
};

export default Home;
