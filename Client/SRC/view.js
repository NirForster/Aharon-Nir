// handle direct DOM manipulation
import jokesDummyDataJson from "../SRC/jokesDummyData.js";

const usersArr = jokesDummyDataJson;

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
