import express, { Express } from 'express';
import dotenv from "dotenv";
import router from './modules';
import cors from 'cors';
import mongooseDB from './mongooseDB';
import session from 'express-session';
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

// database
mongooseDB();

// middlwares 
app.use(express.json());
app.use(cors());
app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 60000 * 60,
    },
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
    }),
}));

// routers 
app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
});

export default app;