export interface BusinessSearch {
    total: number;
    businesses: Businesses[];
    region: Region;
}
export interface Businesses {
    rating: number;
    price: string;
    phone: string;
    id: number;
    alias: string;
    is_closed: boolean;
    categories: Categories[];
    review_count: number;
    name: string;
    url: string;
    coordinates: Coordinates;
    img_url: string;
    location: string;
    distance: number;
}
export interface Categories {
    alias: string;
    title: string;
}
export interface Coordinates {
    latitude: number;
    longitude: number;
}
export interface Location {
    city: string;
    country: string;
    address2: string;
    address3: string;
    state: string;
    address1: string;
    zip_code: string;
}
export interface Region {
    center: Center;
}
export interface Center {
    latitude: number;
    longitude: number;
}