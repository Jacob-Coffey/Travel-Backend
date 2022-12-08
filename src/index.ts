import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { yelpRoutes } from "./services/YelpApi";
import { databaseRoutes } from "./services/DatabaseRoutes";

const app = express();
app.use(cors());
app.use(express.json())

app.use("/", yelpRoutes);
app.use("/db", databaseRoutes)

export const api = functions.https.onRequest(app);





