import React, { useState } from "react";
import { makePosts } from "../api/posts";

const AddNewPost = ({ token, setPost, setAllPosts, allPosts }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [willDeliver, setWillDeliver] = useState(false);

	const submitHandler = async (event) => {
		event.preventDefault();
		//how to add a post - calls makePosts- passes in the variables, sets single post state to posttoAdd
		const postToAdd = await makePosts(
			token,
			title,
			description,
			price,
			willDeliver
		);
		//this sets our all posts state to add our new post and then add all our other posts
		setAllPosts([postToAdd, ...allPosts]);
	};

	return (
		<div className='newpostform'>
			<h4>Create a New Post:</h4>
			<form onSubmit={submitHandler}>
				<label htmlFor='Title'>Title: </label>
				<input
					value={title}
					type={"text"}
					onChange={(event) => {
						setTitle(event.target.value);
					}}
					placeholder='Title'
				></input>
				<label htmlFor='Description'>Description: </label>
				<input
					value={description}
					type={"text"}
					onChange={(event) => {
						setDescription(event.target.value);
					}}
					placeholder='Description'
				></input>
				<label htmlFor='Price'>Price: </label>
				<input
					value={price}
					type={"text"}
					onChange={(event) => {
						setPrice(event.target.value);
					}}
					placeholder='Price'
				></input>
				<label htmlFor='Will-Deliver'>Willing to Deliver? </label>
				<input
					value={willDeliver}
					type={"checkbox"}
					onChange={(event) => {
						setWillDeliver(event.target.value);
					}}
					placeholder='Will Deliver'
				></input>
				<button type={"submit"}>Create</button>
			</form>
		</div>
	);
};

export default AddNewPost;
