import React, { useState } from "react";
import { loginUser } from "../api/auth";

const Login = ({ token, setIsLoggedIn, isLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	//this is just a function which will do everything on the submit button in the form
	const submitHandler = async (event) => {
		event.preventDefault();
		const loggedInUser = loginUser(username, password);
		!token ? setIsLoggedIn(false) : setIsLoggedIn(true);

		// localStorage.setItem("token", token);

		// trigger profile
	};

	return (
		<div id='form'>
			<form onSubmit={submitHandler}>
				<label htmlFor='Username'>Username: </label>
				<input
					value={username}
					type={"text"}
					onChange={(event) => {
						setUsername(event.target.value);
					}}
					placeholder='username'
				></input>
				<label htmlFor='Password'>Password: </label>
				<input
					value={password}
					type={"password"}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
					placeholder='password'
				></input>
				<button type='submit'>Log In</button>
			</form>
		</div>
	);
};

export default Login;
