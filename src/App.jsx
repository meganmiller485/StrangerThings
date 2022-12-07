import "./App.css";
import React, {useState, useEffect} from "react";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import Posts from "./components/Posts";
import { fetchPosts } from "./api/posts";
import AddNewPost from "./components/AddNewPost";

function App() {
  //create state for the token and the user which will be take from the registration and used
  //throughout the app
  //set the state for token to the local storage as the token
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  
  //this use effect creates a function which grabs the api for the single user
  //and attaches it to the token,
  useEffect (() => {
    const getMe = async() => {
      const data = await fetchMe(token);
      setUser(data);
    };
    //if there is a token, run the getMe function and pull the user of token
    if (token){
    getMe();
    }
    //everytime the token changes it will re run this api call
  }, [token]);

  //GET ALL POSTS TO APPEAR ON PAGE
  useEffect(() => {
    const getAllPosts = async() => {
      const data = await fetchPosts();
      setAllPosts(data);
    }
    getAllPosts()
  }, [])
  
  return (
  <div className="App">
    <h1>Welcome {user?.username}!</h1>
    <Register setToken = {setToken}/>
    <AddNewPost token ={token} setPost={setPost}/>
    <Posts token={token} allPosts={allPosts}/>
    
  </div>
  )
};

export default App;
