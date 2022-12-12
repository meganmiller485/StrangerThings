import React from "react";
import { useState } from "react";
import { registerUser } from "../api/auth";

//need to pass setToken into register so we can settoken state to token on submit
const Register = ({ setToken }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (event) => {
		event.preventDefault();

		//assign token (what we returned in our api call) to the username/password of the registered user
		const token = await registerUser(username, password);

		//set the local storage to that token
		localStorage.setItem("token", token);

		//pass the token created by the username/password to the set token function created in App
		setToken(token);
	};

	return (
		<div id='registerform'>
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
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
