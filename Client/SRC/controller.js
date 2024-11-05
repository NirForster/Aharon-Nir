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
