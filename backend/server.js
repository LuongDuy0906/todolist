import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from './src/config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is start on port", PORT);
    });
});
