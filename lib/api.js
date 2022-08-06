import axios from "axios";
// initialize URL Api
const url = "https://backend-rabraw2022.test/api/";

export const apiFaq = () => axios.get(url + "faq");
// api for vidio
export const apiVidio = () => axios.get(url + "vidio");
