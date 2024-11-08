import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/add", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
