import "./App.css";
import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/posts";
import { Routes, Route } from "react-router-dom";
import EditPost from "./components/EditPost";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	//create state for the token and the user which will be take from the registration and used
	//throughout the app
	//set the state for token to the local storage as the token
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});
	const [post, setPost] = useState({});
	//this will update to a list of individual objects which are posts
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
		// }, [allPosts]);
	}, []);
	// console.log(allPosts);

	return (
		<div className='App'>
			<NavBar isLoggedIn={isLoggedIn} />
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
				<Route path='/profile' element={<Profile />} />
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
			</Routes>
		</div>
	);
}

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route
// 			path='/'
// 			element={<App />}
// 		>
// 			<Route
// 				path='/posts'
// 				element={<Posts />}
// 			></Route>
// 		</Route>
// 	)
// );

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
