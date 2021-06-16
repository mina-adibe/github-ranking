import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL;

export function getRepos(page) {
  return fetch(
    `${baseUrl}search/repositories?q=created:>2021-05-16&sort=stars&order=desc&page=${page}`
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getSingleRepo(username, name) {
  return fetch(`${baseUrl}repos/${username}/${name}`)
    .then(handleResponse)
    .catch(handleError);
}
