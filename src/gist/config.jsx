const BASE_URL = "https://api.github.com";

const getAllGistUrl = (username) => {
  return `${BASE_URL}/users/${username}/gists`;
};

const getGistUrl = (gistId) => {
  return `${BASE_URL}/gists${gistId}`;
};

export { getAllGistUrl, getGistUrl };
