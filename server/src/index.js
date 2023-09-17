import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import {userRouter} from './routes/users.js'

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter); //31:58 / 2:37:48

const mongoPassword = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://melodygatan:${mongoPassword}@recipes.mznagvd.mongodb.net/recipes?retryWrites=true&w=majority`)



app.listen(3001, () => console.log("SERVER STARTED!"));

