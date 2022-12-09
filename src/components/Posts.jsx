import React, { useState, useEffect } from "react";
import { deletePost } from "../api/posts";
// import { makePosts } from "../api/posts";
import AddNewPost from "./AddNewPost";
// import { updatePost } from "../api/posts";
import EditPost from "./EditPost";

const Posts = ({ allPosts, setAllPosts, setPost, token, user }) => {
	//create a new state for the post that will be edited
	const [postToEdit, setPostToEdit] = useState({});
	// console.log("in posts to edit", postToEdit);
	const currentUserName = user.username;
	// console.log("this is the current user", currentUserName);

	useEffect(() => {
		///re render the posts every time a post gets added
	}, [allPosts]);

	return (
		<div id='AllPostFunctions'>
			<AddNewPost token={token} setPost={setPost} />

			<EditPost
				setAllPosts={setAllPosts}
				allPosts={allPosts}
				token={token}
				postToEdit={postToEdit}
				setPostToEdit={setPostToEdit}
			/>

			<div id='all-posts-container'>
				{allPosts.map((post) => {
					const postId = post._id;
					const userId = post.author.username;
					return (
						<div className='post' key={post._id}>
							<div>Title: {post.title}</div>
							<div>Description: {post.description}</div>
							<div>Price: {post.price}</div>
							<div>
								{post.willDeliver}
								<p>{post.willDeliver ? "Will Deliver!" : "No Delivery"}</p>
								<p>Post Id:{postId}</p>
							</div>

							<div>
								<p>{currentUserName === userId ? "MATCH" : "NO MATCH"}</p>
								<p>User Logged in: {currentUserName}</p>
								<p>User of Post: {userId}</p>
								<button
									onClick={() => {
										// console.log("click", post);
										//on the click, it will set that post to edit with the current clicked post
										setPostToEdit(post);
										//i want to set the edit form to the current inputs of post from map
									}}
								>
									Edit Post
								</button>
								<button
									onClick={async () => {
										const deletedPost = await deletePost(postId, token);
										setAllPosts([
											...allPosts.filter(
												(post) => post._id !== deletedPost._id
											),
										]);
										console.log(deletedPost);
									}}
								>
									Delete Post
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
