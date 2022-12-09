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
            headers: { Authorization: `Bearer yfproC_ZI_lBlu3cLkrnGrgPwAClubF74wm8BQd5wNrmIrv9xZGefUQTNXkQIw8RlM6tooNT98xoOep_puUSlpZWzJROM3hoePyUJriZLKAuFy5pK8KJO9o_hP2NY3Yx`}
        });
        
        let jsonData = await locationData.json();
        res.json(jsonData);
        }

        if(category === "food"){
            let locationData = await fetch(apiUrl + "&categories=food", {
                headers: { Authorization: `Bearer yfproC_ZI_lBlu3cLkrnGrgPwAClubF74wm8BQd5wNrmIrv9xZGefUQTNXkQIw8RlM6tooNT98xoOep_puUSlpZWzJROM3hoePyUJriZLKAuFy5pK8KJO9o_hP2NY3Yx` }
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
            headers: { Authorization: `Bearer yfproC_ZI_lBlu3cLkrnGrgPwAClubF74wm8BQd5wNrmIrv9xZGefUQTNXkQIw8RlM6tooNT98xoOep_puUSlpZWzJROM3hoePyUJriZLKAuFy5pK8KJO9o_hP2NY3Yx`}
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
        const apiUrl = `https://api.yelp.com/v3/businesses/${id}/reviews`;

        let detailsData = await fetch(apiUrl, {
            headers: { Authorization: `Bearer yfproC_ZI_lBlu3cLkrnGrgPwAClubF74wm8BQd5wNrmIrv9xZGefUQTNXkQIw8RlM6tooNT98xoOep_puUSlpZWzJROM3hoePyUJriZLKAuFy5pK8KJO9o_hP2NY3Yx`}
        });
        let jsonData = await detailsData.json();
        res.json(jsonData);
    }
    catch (e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});
