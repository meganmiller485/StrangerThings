import React, { useState, useEffect } from "react";
// import { makePosts } from "../api/posts";
import AddNewPost from "./AddNewPost";
// import { updatePost } from "../api/posts";
import EditPost from "./EditPost";
// import EditButton from "./Edit Button";
import ModifyButtons from "./ModifyButtons";

const Posts = ({ allPosts, setAllPosts, setPost, token, user }) => {
	//create a new state for the post that will be edited
	const [postToEdit, setPostToEdit] = useState({});
	// console.log("in posts to edit", postToEdit);
	const currentUserName = user.username;
	// console.log("this is the current user", currentUserName);

	return (
		<div id='AllPostFunctions'>
			<div id='addNewPost'>
				<AddNewPost
					token={token}
					setPost={setPost}
					setAllPosts={setAllPosts}
					allPosts={allPosts}
				/>
			</div>
			<div id='editPost'>
				<EditPost
					setAllPosts={setAllPosts}
					allPosts={allPosts}
					token={token}
					postToEdit={postToEdit}
					setPostToEdit={setPostToEdit}
				/>
			</div>
			<div id='all-posts-container'>
				{/* //im gonna need a ternary here to check if all posts  */}
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
							</div>

							<div>
								{currentUserName === userId ? (
									<ModifyButtons
										post={post}
										postId={postId}
										token={token}
										setAllPosts={setAllPosts}
										allPosts={allPosts}
										setPostToEdit={setPostToEdit}
									/>
								) : (
									""
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
