// handle direct DOM manipulation
import jokesDummyDataJson from "../SRC/jokesDummyData.js";

const usersArr = jokesDummyDataJson;
export function renderJokes(filteredJokes) {
  document.querySelector(".jokes-list").innerHTML = "";
  filteredJokes.forEach((joke) => {
    const jokeCard = document.createElement("li");

    const jokeContent = document.createElement("div");
    jokeContent.textContent = joke.joke;
    jokeContent.classList.add = "joke";

    const punchline = document.createElement("div");
    punchline.textContent = joke.punchline;
    punchline.classList.add = "punchline";

    const dropButton = document.createElement("button");
    dropButton.textContent = "⌄";
    dropButton.classList.add("drop-button");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("joke-button-container");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
      controller.handleEditJokeClick(joke.id);
      // we need data where every joke has an Id
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      controller.handleDeleteJokeClick(joke.id);
    });

    buttonContainer.append(editButton, deleteButton);
    jokeCard.append(joke, punchline, buttonContainer);
    document.querySelector(".jokes-list").append(jokeCard);
  });
}

// Function to create the <select> element with options for each user
export function createSelectEl() {
  const selectUsersEl = document.getElementById("users-select"); // Create <select> element

  // Loop through usersArr to create an <option> for each user
  usersArr.forEach((user) => {
    const selectOptionEl = document.createElement("option");
    selectOptionEl.value = user.user; // Set the value attribute to user's ID
    selectOptionEl.textContent = user.name; // Set the text content to user's name
    selectUsersEl.appendChild(selectOptionEl); // Append the option to the <select> element
  });
}
