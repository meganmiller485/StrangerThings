
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
      return post;
    
    } catch (error) {
        console.log(error);
    };
};

//need to make an api call to pull the posts and return them back
export const fetchPosts = async() => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`);
        const {data: {posts},
    } = await response.json()
        
        return posts;
    } catch (error) {
        console.error(error)
    };
};

