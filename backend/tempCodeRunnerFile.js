import express from 'express';
import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

import rateLimiter from './middleware/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 3000

connectDB();

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("server is start on port", PORT);
});
