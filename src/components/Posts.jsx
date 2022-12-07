import React, {useState} from "react";
// import { makePosts } from "../api/posts";
import AddNewPost from "./AddNewPost";

const Posts = ({ allPosts}) => {
    // token,setPost,
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [willDeliver, setWillDeliver] = useState("");

    // const submitHandler = async(event) => {
    //     event.preventDefault();
    //     //how to add a post - calls makePosts- passes in the variables, sets single post state to posttoAdd
    //     const postToAdd = await makePosts(token, title, description, price, willDeliver);
    //     setPost(postToAdd)
    // };

    return(
        <div id="addNewPost">
            {/* <AddNewPost /> */}
            {/* <form
            onSubmit={submitHandler}>
                <label htmlFor="Title">Title: </label>
                <input value={title} type={"text"} onChange={(event)=>{setTitle(event.target.value)}} placeholder="Title"></input>
                <label htmlFor="Description">Description: </label>
                <input value={description} type={"text"} onChange={(event)=>{setDescription(event.target.value)}} placeholder="Description"></input>
                <label htmlFor="Price">Price: </label>
                <input value={price} type={"text"} onChange={(event)=>{setPrice(event.target.value)}} placeholder="Price"></input>
                <label htmlFor="Will-Deliver">Will Deliver: </label>
                <input value={willDeliver} type={"boolean"} onChange={(event)=>{setWillDeliver(event.target.value)}} placeholder="Will Deliver"></input>
                <button type={"submit"}>Submit</button>
            </form> */}
            <div id="all-posts-container">
                {
                    allPosts.map((post) => {
                        return (
                            <div key={post._id}>
                                <div>Title: {post.title}</div>
                                <div>Description: {post.description}</div>
                                <div>Price: {post.price}</div>
                                <div>{post.willDeliver}
                                    <p>{post.willDeliver ? "Will Deliver!" : "No Delivery"}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

    
};

export default Posts;

