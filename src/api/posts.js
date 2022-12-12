
const cohort = "2211-FTB-ET-WEB-FT";
//need to make an api call to push up the new posts to the api based on a token
export const makePosts = async(token, title, description, price, willDeliver) => {
      try {  
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver
          },
        }),
      });
      console.log(response)
      const {
        data: {post},
    } = await response.json();
      console.log(post)
    return post;

    
    } catch (error) {
        console.log(error);
    };
};

//need to make an api call to pull the posts and return them back
export const fetchPosts = async() => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`);
        //add a method to pass token 

        const {data: {posts},
    } = await response.json()
        
    // console.log(posts);
        return posts;
    } catch (error) {
        console.error(error)
    };
};


//api call to delete post

export const deletePost = async(postId, token) => {
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return("post deleted")
  
  
  } catch (error) {
    console.error(error);
  }
}

//api to change post
export const updatePost = async (token, postId, title,
  description,
  price,
  willDeliver) => {
  try {
    const response = await fetch(`http://strangers-things.herokuapp.com/api/${cohort}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
        title,
        description,
        price,
        willDeliver,
    }})
    });

    const data = await response.json()
    console.log(data)
    // return post;

  } catch (error) {
    console.error(error);
  }
}

//CONSOLE.LOG EVERYTHING AROUND THE USERNAME IN POSTS
