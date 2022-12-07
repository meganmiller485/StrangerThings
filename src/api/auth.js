import React from "react";
import Register from "../components/Register";

const cohort = "2211-FTB-ET-WEB-FT";

//this is the api call which registers the user
export const registerUser = async(username, password) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         user: {
            username,
            password
          },
        }),
        }
        );
         //need sean to explain this object destructuring 

         //we want to target the token of the returning user, we can destructure the 
         //response object to be just the token, and then return the token 
        const {
            data: {token},
        } = await response.json();
        return token;
        }
    catch (error) {
    console.error(error)
    }
};

//need to make an api call to assign the user to the token
//so we need to pass in token into our function 
export const fetchMe = async(token) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          })
        const {data} = await response.json();
        return data;
    } 
    catch (error) {
        console.error(error)
    }
};


//api route used for a user to login when they already have an account


