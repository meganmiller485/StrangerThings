import "./App.css";
import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/posts";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Link,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

function App() {
	//create state for the token and the user which will be take from the registration and used
	//throughout the app
	//set the state for token to the local storage as the token
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});
	const [post, setPost] = useState({});
	//this will update to a list of individual objects which are posts
	const [allPosts, setAllPosts] = useState([]);

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
	}, [allPosts]);

	return (
		<div className='App'>
			<header className='header'>
				<div id='navbar'>
					<Link to={"/home"}>Home</Link>
					<Link to={"/posts"}>Posts</Link>
					<Link to={"/profile"}>Profile</Link>
					<Link to={"/logout"}>Log Out</Link>
				</div>
			</header>
			<div id='mainPage'>
				<h1>Welcome {user?.username}!</h1>

				<Posts
					token={token}
					setPost={setPost}
					allPosts={allPosts}
					setAllPosts={setAllPosts}
				/>
				<Register setToken={setToken} />
				{/* <Posts token={token} setPost={setPost} allPosts={allPosts} setAllPosts={setAllPosts}/> */}
			</div>
		</div>
	);
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}
		/>
	)
);

{
	/* <Routes>
	>
	<Route
		path='posts'
		element={
			<Posts
				token={token}
				setPost={setPost}
				allPosts={allPosts}
				setAllPosts={setAllPosts}
			/>
		}
	/>
</Routes>; */
}

// const Layout = () => {
//   return(

//   )
// }

export default App;
