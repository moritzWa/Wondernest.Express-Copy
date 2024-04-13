import { createServer } from "express-vercel";
import app from "../app"; // Adjust the path based on your directory structure

export default createServer(app);
