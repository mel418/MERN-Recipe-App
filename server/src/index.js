import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import {userRouter} from "./routes/users.js";
import {recipesRouter} from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter); 
app.use("/recipes", recipesRouter);

const mongoPassword = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://melodygatan:${mongoPassword}@recipes.mznagvd.mongodb.net/recipes?retryWrites=true&w=majority`)

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the server!"); 
});

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


