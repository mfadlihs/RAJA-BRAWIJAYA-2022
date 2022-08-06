import axios from "axios";
// initialize URL Api
const url = "https://backend-rabraw2022.test/api/";

export const apiFaq = () => axios.get(url + "faq");
// api for vidio
export const apiVidio = () => axios.get(url + "vidio");
// api for news
export const apiNews = () => axios.get(url + "news");
// api for once news
export const apiNewsOnce = (id) => axios.get(url + "news/" + id);
