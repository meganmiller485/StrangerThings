import React from "react";

const MessageForm = () => {
	return (
		<div>
			<div className='messageForm'>
				<form>
					<label htmlFor='Send'>Send to: </label>
					<input type='text' placeholder='Recipient'></input>
					<label htmlFor='content'>Enter Message Here: </label>
					<input type='text' placeholder='Enter your message here.'></input>
					<button>Send Message</button>
				</form>
			</div>
		</div>
	);
};

export default MessageForm;
