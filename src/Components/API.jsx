import axios from "axios";

export const getAllArticles = () => {
    return axios.get(`https://maddens-news.onrender.com/api/articles`)
    .then(response => {return response})
} 

export const getArticleByID = (article_id) => {
    return axios.get(`https://maddens-news.onrender.com/api/articles/${article_id}`)
    .then(response => { return response })
} 

export const getCommentsByArticleByID = (article_id) => {
    return axios.get(`https://maddens-news.onrender.com/api/articles/${article_id}/comments`)
    .then(response => { return response })
} 


    /*
    Here's a full list of API calls available:

    GET /api
    https://maddens-news.onrender.com/api
    serves up a json representation of all the available endpoints of the api

    GET /api/topics
    https://maddens-news.onrender.com/api/topics
    serves an array of all topics

    GET /api/articles
    https://maddens-news.onrender.com/api/articles
    serves an array of all articles

    GET /api/articles/:article_id
    https://maddens-news.onrender.com/api/articles/:article_id
    serves an article of matching article_id as an object

    GET /api/articles/:article_id/comments
    https://maddens-news.onrender.com/api/articles/:article_id/comments
    serves array of article comments with specified article_id

    POST /api/articles/:article_id/comments
    https://maddens-news.onrender.com/api/articles/:article_id/comments
    Adds a new comment, linked to the article_id specified and returns said comment

    PATCH /api/articles/:article_id
    https://maddens-news.onrender.com/api/articles/:article_id
    updates the vote count on specified article, returns updated article

    DELETE /api/comments/:comment_id
    https://maddens-news.onrender.com/api/comments/:comment_id
    deletes the comment specified

    GET /api/users
    https://maddens-news.onrender.com/api/users
    serves array of users objects, with properties of username, name and avatar_url
    */
