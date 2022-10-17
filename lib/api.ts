import { Ukm } from "@/constants/types";
import axios from "axios";
import { useState } from "react";
// initialize URL Api
export const url = "https://rajabrawijaya.ub.ac.id/api/";

export const apiFaq = () => axios.get(url + "faq");
// api for vidio
export const apiVidio = () => axios.get(url + "vidio");
// api for news
export const apiNews = () => axios.get(url + "news");
// api for once news
export const apiNewsOnce = (id: number) => axios.get(url + "news/" + id);

// api fot ukm
export const apiUkmHome = async () => {
	return await axios.get<Ukm[]>(url + "ukm").then(res => res.data);
};
