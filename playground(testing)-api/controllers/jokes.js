import Joke from "../models/jokes.js";

export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find().populate("user");
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve jokes" });
  }
};

export const createJoke = async (req, res) => {
  try {
    const newJoke = new Joke(req.body);
    await newJoke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to create joke" });
  }
};

export const updateJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("user");
    if (!updatedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json(updatedJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to update joke" });
  }
};

export const deleteJoke = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findByIdAndDelete(id);
    if (!deletedJoke) return res.status(404).json({ error: "Joke not found" });
    res.json({ message: "Joke deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete joke" });
  }
};

export const getJokeWithUser = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id).populate("user"); // Populate the user data for this joke
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve joke" });
  }
};
