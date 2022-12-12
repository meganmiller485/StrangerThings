import React from "react";

const Profile = ({ user, token, postID, allPosts }) => {
	const userMessages = user.messages;
	const userPosts = user.posts;

	return (
		<div className='userProfile'>
			{!token ? "Login Please" : ""}
			<div className='account'>
				<h2>Your Account:</h2>
				<div>Your username: {user.username}</div>
			</div>
			<div className='userPosts'>
				<h2>Your Posts:</h2>
				{userPosts == ""
					? "No Posts Yet!"
					: userPosts.map((post) => {
							return (
								<div className='userPost' key={post._id}>
									<div>Title: {post.title}</div>
									<div>Description: {post.description}</div>
									<div>Price: {post.price}</div>
									<div>{post.willDeliver}</div>
								</div>
							);
					  })}
			</div>
			<div className='userMessages'>
				<h2>Your Messages:</h2>
				{userMessages == ""
					? "Sorry, no messages"
					: userMessages.map((userMessage) => {
							return (
								<div className='userPost' key={userMessage._id}>
									<div>From: {userMessage.fromUser.username}</div>
									<div>Posting: {userMessage.post.title}</div>
									<div>Content: {userMessage.content}</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
};

export default Profile;
