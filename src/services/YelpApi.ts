import express from 'express';
import fetch from 'node-fetch';

export const yelpRoutes = express.Router();

yelpRoutes.get("/search", async (req, res) => {

    let city: string = req.query.location as string;

    try{
        const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${city}`;
        let category = req.query.categories as string;
        if(category === "hotels"){
        let locationData = await fetch(apiUrl + "&categories=hotels", {
            headers: { Authorization: `Bearer 5_HYyg-3qca7lNcMH4CWAGXWQmiPZpI9cJut7uCuwYygLc11Gt6XtY-NJHSLJoK1Msv-z4g5wgtQ5LWwowCxKrTFbEoco64F-rZOlh0nh99uCGla9di6HH71c0N8Y3Yx`}
        });
        
        let jsonData = await locationData.json();
        res.json(jsonData);
        }

        if(category === "food"){
            let locationData = await fetch(apiUrl + "&categories=food", {
                headers: { Authorization: `Bearer 5_HYyg-3qca7lNcMH4CWAGXWQmiPZpI9cJut7uCuwYygLc11Gt6XtY-NJHSLJoK1Msv-z4g5wgtQ5LWwowCxKrTFbEoco64F-rZOlh0nh99uCGla9di6HH71c0N8Y3Yx`}
            });
            
            let jsonData = await locationData.json();
            res.json(jsonData);
            }
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});

yelpRoutes.get("/details/:id", async (req, res) => {

    let id = req.params.id;

    try{
        const apiUrl = `https://api.yelp.com/v3/businesses/${id}`;

        let detailsData = await fetch(apiUrl, {
            headers: { Authorization: `Bearer 5_HYyg-3qca7lNcMH4CWAGXWQmiPZpI9cJut7uCuwYygLc11Gt6XtY-NJHSLJoK1Msv-z4g5wgtQ5LWwowCxKrTFbEoco64F-rZOlh0nh99uCGla9di6HH71c0N8Y3Yx`}
        });
        let jsonData = await detailsData.json();
        res.json(jsonData);
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});

yelpRoutes.get("/reviews/:id", async (req, res) => {

      let id = req.params.id;

    try{
        const apiUrl = `https://api.yelp.com/v3/businesses/${id}`;

        let detailsData = await fetch(apiUrl, {
            headers: { Authorization: `Bearer 5_HYyg-3qca7lNcMH4CWAGXWQmiPZpI9cJut7uCuwYygLc11Gt6XtY-NJHSLJoK1Msv-z4g5wgtQ5LWwowCxKrTFbEoco64F-rZOlh0nh99uCGla9di6HH71c0N8Y3Yx`}
        });
        let jsonData = await detailsData.json();
        res.json(jsonData);
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});
