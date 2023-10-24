import axios from "axios";

export const FullAPIList = () => {
    return axios.get(`https://maddens-news.onrender.com/api`)
    .then(response => {return response})
}

export const AllArticlesAPI = () => {
    return axios.get(`https://maddens-news.onrender.com/api/articles`)
    .then(response => {return response})
}

export const ArticleByID = (article_id) => {
    return axios.get(`https://maddens-news.onrender.com/api/articles/${article_id}`)
    .then(response => { return response })
}

