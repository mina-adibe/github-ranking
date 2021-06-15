import { handleResponse, handleError } from "./apiUtils";

const baseUrl =
  process.env.REACT_APP_API_URL +
  "search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1";

export function getRepos() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
