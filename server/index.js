import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import {userRouter} from "./src/routes/users.js";
import {recipesRouter} from "./src/routes/recipes.js";

const app = express();

app.use(cors(
  {
    origin: ["https://mern-recipe-app-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,

  }
));
app.use(express.json());

app.use("/auth", userRouter); 
app.use("/recipes", recipesRouter);

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

app.options("*", cors());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the server!"); 
});

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


