import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Pun", "Dad Joke", "Knock-Knock"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Joke", jokeSchema);
