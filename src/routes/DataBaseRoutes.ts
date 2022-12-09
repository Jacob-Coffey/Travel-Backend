import express from 'express';
import { Businesses } from '../models/YelpSearchBusiness';
import { getClient } from '../db';

export const databaseRoutes = express.Router();

databaseRoutes.post("/", async (req, res) => {
    const place = req.body as Businesses;

    try{
        const client = await getClient();
        const results = await client.db().collection<Businesses>("list").insertOne(place);
        res.status(201).json({...place, _id: results.insertedId});
    }
    catch(e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});

    }
});

databaseRoutes.get("/", async (req, res) => {
    
    try{
        const client = await getClient();
        const results = await client.db().collection<Businesses>("list").find().toArray();
        res.json(results);
    }
    catch(e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});


databaseRoutes.delete("/", async (req, res) => {
    const place = req.body as Businesses
    try{
        const client = await getClient();
        const results = await client.db().collection<Businesses>("list").deleteOne(place);
        res.json(results);
    }
    catch(e){
        console.error("ERROR", e);
        res.status(500).json({message: "Internal Service Error"});
    }
});