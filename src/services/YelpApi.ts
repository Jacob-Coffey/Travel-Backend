import axios from "axios";
import { BusinessInfo } from "../models/YelpBusinessInfo";

export function getYelpApi() {
    const apiKey = process.env.YELP_API_KEY || "";
    return axios.get<BusinessInfo>("https://api.yelp.com/v3/businesses/{id}", {headers: {
        Authorization: "Bearer" + apiKey,
    }});
};