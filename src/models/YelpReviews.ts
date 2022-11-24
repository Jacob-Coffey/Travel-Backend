5_HYyg-3qca7lNcMH4CWAGXWQmiPZpI9cJut7uCuwYygLc11Gt6XtY-NJHSLJoK1Msv-z4g5wgtQ5LWwowCxKrTFbEoco64F-rZOlh0nh99uCGla9di6HH71c0N8Y3Yx


export interface Reviews {
    reviews:            Review[];
    total:              number;
    possible_languages: string[];
}

export interface Review {
    id:           string;
    rating:       number;
    user:         User;
    text:         string;
    time_created: string;
    url:          string;
}

export interface User {
    id:          string;
    profile_url: string;
    image_url:   null | string;
    name:        string;
}
