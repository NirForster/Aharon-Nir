import jokesArray from "./jokesDummyData.js";
const tempId = "645c1eab57f9bc7e8f9b1234";
function getJokesByUserId(tempId) {
  return jokesArray.filter((joke) => joke.user === tempId);
}

console.log(getJokesByUserId(tempId));
