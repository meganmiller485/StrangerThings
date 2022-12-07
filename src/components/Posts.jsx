import React, { useState } from "react";
import { deletePost } from "../api/posts";
// import { makePosts } from "../api/posts";
import AddNewPost from "./AddNewPost";
// import { updatePost } from "../api/posts";

const Posts = ({ allPosts, setAllPosts, setPost, token }) => {
	// const updatedFields = {
	//     title,
	//     description,
	//     price,
	//     location,
	//     willDeliver
	// }

	return (
		<div id='AllPostFunctions'>
			<AddNewPost
				token={token}
				setPost={setPost}
			/>
			<div id='all-posts-container'>
				{allPosts.map((post) => {
					const postId = post._id;
					return (
						<div
							className='post'
							key={post._id}
						>
							<div>Title: {post.title}</div>
							<div>Description: {post.description}</div>
							<div>Price: {post.price}</div>
							<div>
								{post.willDeliver}
								<p>{post.willDeliver ? "Will Deliver!" : "No Delivery"}</p>
								<p>{postId}</p>
							</div>
							<button
							// onClick = {async () => {
							//     const updatedPost = await updatePost(postId, updatedFields);

							// }}
							// //on click its going to trigger an ansynce function which will return the updated post

							//THIS BUTTON WILL GO TO A FORM AND ASSIGN THE PARAMETERS TO THE STATE, THEN THERE WILL BE AN
							//UPDATE BUTTON WHICH WILL HAVE THE API CALL TO UPDATE THE PARAMETERS
							>
								Edit Post
							</button>
							<button
								onClick={async () => {
									const deletedPost = await deletePost(postId, token);
									setAllPosts([
										...allPosts.filter((post) => post._id !== deletedPost._id),
									]);
									console.log(deletedPost);
								}}
							>
								Delete Post
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
