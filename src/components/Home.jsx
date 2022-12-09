import React from "react";

const Home = ({ user }) => {
	return (
		<div className='mainpage'>
			<h1>Welcome {user?.username}!</h1>
		</div>
	);
};

export default Home;
