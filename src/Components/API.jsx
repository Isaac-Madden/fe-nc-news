import axios from "axios";

export const FullAPIList = () => {
    return axios.get(`https://maddens-news.onrender.com/api`)
    .then(response => {return response})
}