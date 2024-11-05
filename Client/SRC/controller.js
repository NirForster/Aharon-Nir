// connect model and view
import {} from "./model.js";
import { createSelectEl } from "./view.js";

const controller = {
  init: async () => {
    createSelectEl();
  },
};

function userSelected(userId) {
  try {
    console.log(userId);
    const filteredJokes = getJokesByUserId(userId);
    renderJokes(filteredJokes);
  } catch (error) {
    console.error("Error in userSelected:", error);
  }
}

function handleEditJokeClick() {
  editJoke(joke.id);
}

function handleDeleteJokeClick() {
  deleteJoke(joke.id);
}

export default controller;
