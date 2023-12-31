import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import {userRouter} from "./routes/users.js";
import {recipesRouter} from "./routes/recipes.js";

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter); 
app.use("/recipes", recipesRouter);

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);



app.listen(3001, () => console.log("SERVER STARTED!"));

