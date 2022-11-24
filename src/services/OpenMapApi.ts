import axios from "axios";
import { Geoname } from "../models/OpenMapGeoname";
import { Places } from "../models/OpenMapTrip";


export function getLocationApi() {
    const apiKeyOpenMap = process.env.OPEN_MAP_API_KEY || "";
    return axios.get<Geoname>(`http://api.opentripmap.com/0.1/en/places/geoname?name=Detroit&apikey=${apiKeyOpenMap}`);
}

export function getResultsApi() {
    const apiKeyOpenMap = process.env.OPEN_MAP_API_KEY || "";
    return axios.get<Places>(`http://api.opentripmap.com/0.1/en/places/bbox?apikey=${apiKeyOpenMap}`, {
        params: {
            lon_min: -83.04575,
            lon_max: -83.04575,
            lat_min: 42.33143,
            lat_max: 42.33143
        }
    });
}

console.log(getResultsApi());