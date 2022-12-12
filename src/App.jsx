import "./App.css";
import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/posts";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MessageForm from "./components/MessageForm";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});
	const [post, setPost] = useState({});

	const [allPosts, setAllPosts] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	//this use effect creates a function which grabs the api for the single user
	//and attaches it to the token,
	useEffect(() => {
		const getMe = async () => {
			const data = await fetchMe(token);
			setUser(data);
		};
		//if there is a token, run the getMe function and pull the user of token
		if (token) {
			getMe();
		}
		//everytime the token changes it will re run this api call
	}, [token]);

	//GET ALL POSTS TO APPEAR ON PAGE
	useEffect(() => {
		const getAllPosts = async () => {
			const data = await fetchPosts();
			setAllPosts(data);
		};
		getAllPosts();
	}, []);

	return (
		<div className='App'>
			<header>
				<NavBar isLoggedIn={isLoggedIn} />
			</header>

			<Routes>
				<Route path='/' element={<Home user={user} />} />
				<Route
					path='/login'
					element={
						<Login
							setToken={setToken}
							token={token}
							setUser={setUser}
							setIsLoggedIn={setIsLoggedIn}
							isLoggedIn={isLoggedIn}
						/>
					}
				/>
				<Route path='/register' element={<Register setToken={setToken} />} />
				<Route
					path='/profile'
					element={
						<Profile
							token={token}
							setPost={setPost}
							allPosts={allPosts}
							setAllPosts={setAllPosts}
							user={user}
						/>
					}
				/>
				<Route
					path='/posts'
					element={
						<Posts
							token={token}
							setPost={setPost}
							allPosts={allPosts}
							setAllPosts={setAllPosts}
							user={user}
						/>
					}
				/>
				<Route path='/messageform' element={<MessageForm />} />
			</Routes>
		</div>
	);
}

export default App;
