import React, { useState } from "react";
import { loginUser } from "../api/auth";

const Login = ({ token, setToken, setUser, setIsLoggedIn, isLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (event) => {
		try {
			event.preventDefault();
			const token = await loginUser(username, password);

			setToken(token);
			localStorage.setItem("token", token);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div id='loginform'>
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
