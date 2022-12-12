import React from "react";
import { deletePost } from "../api/posts";

const ModifyButtons = ({
	postId,
	post,
	token,
	setAllPosts,
	allPosts,
	setPostToEdit,
}) => {
	return (
		<div>
			<button
				onClick={() => {
					setPostToEdit(post);
				}}
			>
				Edit Post
			</button>
			<button
				onClick={async () => {
					const deletedPost = await deletePost(postId, token);
					setAllPosts([
						...allPosts.filter((post) => post._id !== postId),
						//setting all all posts to be any post that does not equal our deleted post
					]);
					console.log(deletedPost);
				}}
			>
				Delete Post
			</button>
		</div>
	);
};

export default ModifyButtons;
