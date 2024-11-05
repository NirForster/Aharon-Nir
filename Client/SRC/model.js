async function fetchAllJokes(params) {
  try {
    const response = await fetch("/api/jokes/all");
    const jokes = await response.json();
    return jokes;
  } catch (error) {}
}
