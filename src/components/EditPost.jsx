import React, { useState } from "react";
import { useEffect } from "react";
import { updatePost } from "../api/posts";

const EditPost = ({
	setAllPosts,
	allPosts,
	token,
	setPostToEdit,
	postToEdit,
}) => {
	//set the new form states with the posttoEdit inputs from the map
	const [editTitle, setEditTitle] = useState(postToEdit.title);
	const [editDescription, setEditDescription] = useState(
		postToEdit.description
	);
	const [editPrice, setEditPrice] = useState(postToEdit.price);
	const [editwillDeliver, seteditWillDeliver] = useState(
		postToEdit.willdeliver
	);

	useEffect(() => {
		setEditTitle(postToEdit.title);
		setEditDescription(postToEdit.description);
		setEditPrice(postToEdit.price);
		seteditWillDeliver(postToEdit.willdeliver);
	}, [postToEdit]);

	// const fieldsToUpdate = {
	// 	editTitle,
	// 	editDescription,
	// 	editPrice,
	// 	editwillDeliver,
	// };
	// console.log(fieldsToUpdate);

	const postId = postToEdit._id;

	const submitHandler = async (event) => {
		event.preventDefault();
		const updatedPost = await updatePost(
			postId,
			token,
			editTitle,
			editDescription,
			editPrice,
			editwillDeliver
		);
		//this will access the api and return the correct thingys
		setAllPosts([updatedPost, ...allPosts]);
	};

	// console.log(editTitle);
	return (
		<form className='editpostform' onSubmit={submitHandler}>
			<label htmlFor='Title'>Title: </label>
			<input
				value={editTitle}
				type={"text"}
				onChange={(event) => {
					setEditTitle(event.target.value);
				}}
				placeholder='Title'
			></input>
			<label htmlFor='Description'>Description: </label>
			<input
				value={editDescription}
				type={"text"}
				onChange={(event) => {
					setEditDescription(event.target.value);
				}}
				placeholder='Description'
			></input>
			<label htmlFor='Price'>Price: </label>
			<input
				value={editPrice}
				type={"text"}
				onChange={(event) => {
					setEditPrice(event.target.value);
				}}
				placeholder='Price'
			></input>
			<label htmlFor='Will-Deliver'>Willing to Deliver? </label>
			<input
				value={editwillDeliver}
				type={"checkbox"}
				onChange={(event) => {
					seteditWillDeliver(event.target.value);
				}}
				placeholder='Will Deliver'
			></input>
			<button type={"submit"}>
				Submit Your Edit
				{/* when I click this button I want the api to call the post with the right id and alter the inputs*/}
			</button>
		</form>
	);
};

export default EditPost;
