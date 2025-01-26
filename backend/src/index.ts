import express, { Express } from 'express';
import dotenv from "dotenv";
import router from './modules';
import cors from 'cors';
import { Mongoose } from './mongoose';
import session from 'express-session';
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

// database
Mongoose();

// middlwares 
app.use(express.json());
app.use(cors());

// routers 
app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
});

export default app;