import express from "express";
import {
  getAllJokes,
  createJoke,
  updateJoke,
  deleteJoke,
  getJokeWithUser,
} from "../controllers/jokes.js";

const router = express.Router();

router.get("/all", getAllJokes);
router.post("/", createJoke);
router.patch("/:id", updateJoke);
router.delete("/:id", deleteJoke);
router.get("/:id", getJokeWithUser);

export default router;
