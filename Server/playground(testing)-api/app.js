import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

// Routes Import
import jokesRoutes from "./routes/jokes.js";
import usersRoutes from "./routes/users.js";

dotenv.config();
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Successfully Conected to MongoDb Server");
});

// Middleware
app.use(morgan("tiny"));

app.use("/jokes", jokesRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
