import React, { useState, useEffect } from "react";
import AddNewPost from "./AddNewPost";
import EditPost from "./EditPost";
import ModifyButtons from "./ModifyButtons";
import { Link } from "react-router-dom";
import MessageForm from "./MessageForm";

const Posts = ({ allPosts, setAllPosts, setPost, token, user }) => {
	const [postToEdit, setPostToEdit] = useState({});

	const currentUserName = user.username;

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
				<h2>All Available Posts</h2>
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
								{currentUserName === userId ? (
									""
								) : (
									<button>
										<Link to='/messageform'>Contact Seller</Link>
									</button>
								)}
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
